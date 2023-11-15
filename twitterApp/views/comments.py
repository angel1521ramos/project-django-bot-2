from django.shortcuts import render, redirect, get_object_or_404
from twitterApp.models import Accounts
from twitter.account import Account
from twitterApp.models import Comments
from pathlib import Path
import orjson
import webbrowser
import time

import subprocess
import random

codelist = ['US-C', 'US', 'US-W', 'CA', 'CA-W']
#from twitter.account import Account

#dar comentario tweet
def comments_tweets(request):
    try:
        tweet_id = int(request.POST['tweet'])
        accounts = Accounts.objects.all()
        comments = Comments.objects.all()
        # Crear un arreglo de IDs a partir de los objetos
        ids = [comment.id for comment in comments]
        # Ahora 'ids' contiene todos los IDs de los objetos en el modelo
        print(ids)
        # Verificamos si hay suficientes comentarios
        if not comments:
            raise ValueError("No existe ningun comentario en la base de datos")


        for i in range(0, len(accounts), 3):
            for j in range(i, min(i + 3, len(accounts))):
                #configuracion del vpn
                codechoice = random.choice(codelist)
                subprocess.call("windscribe connect " + codechoice, shell=True)
                username = accounts[j].username
                cookies = orjson.loads(Path(f'twitter.cookies.{username}').read_bytes())
                account = Account(cookies=cookies)
                #Accion determinada
                print(f"{ accounts[j].username } espera 3 segundos")
                time.sleep(3)
                na = random.choice(ids) - 1
                print(na)
                account.reply(comments[na].message , tweet_id)
                print(f"comentario de ... { accounts[j].username }")
                subprocess.call("windscribe disconnect", shell=True)
                ids.remove(na)

            if i + 3 < len(accounts):
                print("espera 18 segundos ... se esta cambiando la direccion ip")
                time.sleep(18)

        url_tweet = f"https://twitter.com/Twitter/status/{tweet_id}"
        webbrowser.open(url_tweet)
        return redirect("comments")
    except ValueError:
        return render(
            request, "actions/comentarios.html", {"error": "Error realizar la accion"}
        )

#guardar comentarios
def save_comments(request):
    try:
        array = request.POST['comments']
        comments = array.split(';')
        for x in comments:
            cuenta = Comments()
            cuenta.message = x
            cuenta.counter = 0
            cuenta.save()

        return redirect("comments")
    except ValueError:
        return render(
            request, "comments/comments.html", {"comments": comments, "error": "Error al Guardar la informacion"}
        )

#muestra comentarios
def comments(request):
    comments = Comments.objects.all()
    script = ""
    for x in comments:
        script += x.message + "; "
    
    script = script[:-2]
    return render(
        request,
        "comments/comments.html",
        {"comments": comments, "script": script},
    )


#detalle de comentarios
def detail_comments(request, comments_id):
    comments = get_object_or_404(Comments, pk=comments_id)
    return render(
        request, "comments/detail.html", {"comments": comments}
    )

#Actualiza la informacion
def update_comments(request, comments_id):
    try:
        comments = get_object_or_404(Comments, pk=comments_id)
        comments.message = request.POST['message']
        comments.save()
        return redirect("comments")
    except ValueError:
        return render(
            request, "comments/detail.html", {"comments": comments, "error": "Error al actualizar la informacion"}
        )

#Elimina la informacion
def delete_comments(request, comments_id):
    comments = get_object_or_404(Comments, pk=comments_id)
    comments.delete()
    return redirect("comments")
