from django.shortcuts import render, redirect, get_object_or_404
from twitterApp.models import Tweets

#from twitter.account import Account

#guardar tweet
def save_tweets(request):
    try:
        array = request.POST['tweets']
        tweets = array.split(';')
        for x in tweets:
            twit = Tweets()
            twit.message = x
            twit.counter = 0
            twit.save()

        return redirect("tweets")
    except ValueError:
        return render(
            request, "tweets/tweets.html", {"tweets": tweets, "error": "Error al Guardar la informacion"}
        )

#muestra tweet
def tweets(request):
    tweets = Tweets.objects.all()
    script = ""
    for x in tweets:
        script += x.message + "; "
    
    script = script[:-2]
    return render(
        request,
        "tweets/tweets.html",
        {"tweets": tweets, "script": script},
    )


#detalle de tweet
def detail_tweets(request, tweets_id):
    tweets = get_object_or_404(Tweets, pk=tweets_id)
    return render(
        request, "tweets/detail.html", {"tweets": tweets}
    )

#Actualiza la informacion
def update_tweets(request, tweets_id):
    try:
        tweets = get_object_or_404(Tweets, pk=tweets_id)
        tweets.message = request.POST['message']
        tweets.save()
        return redirect("tweets")
    except ValueError:
        return render(
            request, "tweets/detail.html", {"tweets": tweets, "error": "Error al actualizar la informacion"}
        )

#Elimina la informacion
def delete_tweets(request, tweets_id):
    tweets = get_object_or_404(Tweets, pk=tweets_id)
    tweets.delete()
    return redirect("tweets")
