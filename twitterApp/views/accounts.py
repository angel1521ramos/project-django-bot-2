from django.shortcuts import render, redirect, get_object_or_404
from twitterApp.models import Accounts
from twitter.account import Account
from pathlib import Path
import orjson

import subprocess
import random

codelist = ['US-C', 'US', 'US-W']
#import tweepy

#guardar usuarios
def save_accounts(request):
    try:
        array = request.POST['accounts']
        accounts = array.split(';')
        for x in accounts:
            codechoice = random.choice(codelist)
            account = x.split('/')

            cuenta = Accounts()
            cuenta.email = account[0]
            cuenta.username = account[1]
            cuenta.password = account[2]

            email, username, password = account[0], account[1], account[2]
            subprocess.call("windscribe connect " + codechoice, shell=True)
            account = Account(email, username, password)

            # write cookies
            cookies = {k:v for k,v in account.session.cookies.items() if k in {'ct0','auth_token'}}
            Path(f'twitter.cookies.{username}').write_bytes(orjson.dumps(cookies))
            subprocess.call("windscribe disconnect", shell=True)

            cuenta.save()

        return redirect("accounts")
    except ValueError:
        return render(
            request, "accounts/accounts.html", {"accounts": accounts, "error": "Error al Guardar la informacion"}
        )

#muestra usuarios
def accounts(request):
    accounts = Accounts.objects.all()
    script = ""
    for x in accounts:
        script += x.email + "/" + x.username + "/" + x.password + "; "
    
    script = script[:-2]

    return render(
        request,
        "accounts/accounts.html",
        {"accounts": accounts, "script": script},
    )

#detalle de cuentas
def detail_accounts(request, accounts_id):
    account = get_object_or_404(Accounts, pk=accounts_id)
    accounts = Accounts.objects.all()
    return render(
        request, "accounts/detail.html", {"account": account, "accounts": accounts}
    )

#Actualiza la informacion de usuario
def update_accounts(request, accounts_id):
    try:
        accounts = get_object_or_404(Accounts, pk=accounts_id)
        accounts.email = request.POST['email']
        accounts.username = request.POST['username']
        accounts.password = request.POST['password']
        accounts.save()
        return redirect("accounts")
    except ValueError:
        return render(
            request, "accounts/detail.html", {"accounts": accounts, "error": "Error al actualizar la informacion"}
        )

#Elimina la informacion seleccionada
def delete_accounts(request, accounts_id):
    accounts = get_object_or_404(Accounts, pk=accounts_id)
    accounts.delete()
    return redirect("accounts")


