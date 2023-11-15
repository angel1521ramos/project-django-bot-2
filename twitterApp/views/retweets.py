from django.shortcuts import render, redirect, get_object_or_404
from twitterApp.models import Accounts
from twitter.account import Account
from pathlib import Path
import orjson
import webbrowser
import time

import subprocess
import random

codelist = ['US-C', 'US', 'US-W', 'CA', 'CA-W', 'MX']
#muestra tweet
def retweets(request):
    return render(
        request,
        "actions/retweets.html"
    )

#dar like tweet
def search_retweet(request):
    try:
        tweet_id = int(request.POST['tweet'])
        accounts = Accounts.objects.all()

        for i in range(0, len(accounts), 3):
            for j in range(i, min(i + 3, len(accounts))):
                codechoice = random.choice(codelist)
                subprocess.call("windscribe connect " + codechoice, shell=True)
                username = accounts[j].username
                cookies = orjson.loads(Path(f'twitter.cookies.{username}').read_bytes())
                account = Account(cookies=cookies)
                account.retweet(tweet_id)
                print(f"retweet de ... { accounts[j].username }")
                subprocess.call("windscribe disconnect", shell=True)

            if i + 3 < len(accounts):
                print("espera 18 segundos ...")
                time.sleep(18) 

        url_tweet = f"https://twitter.com/Twitter/status/{tweet_id}"
        webbrowser.open(url_tweet)
        return redirect("accounts")
    except ValueError:
        return render(
            request, "actions/retweets.html", {"error": "Error realizar la accion"}
        )


#dar like tweet
def like_retweet(request, accounts_id):
    try:
        codechoice = random.choice(codelist)
        subprocess.call("windscribe connect " + codechoice, shell=True)
        tweet_id = int(request.POST['tweet'])
        account_select = Accounts.objects.get(id=accounts_id)

        username = account_select.username
        
        cookies = orjson.loads(Path(f'twitter.cookies.{username}').read_bytes())
        accountApi = Account(cookies=cookies)
        accountApi.retweet(tweet_id)

        url_tweet = f"https://twitter.com/Twitter/status/{tweet_id}"
        subprocess.call("windscribe disconnect", shell=True)
        webbrowser.open(url_tweet)

        account = get_object_or_404(Accounts, pk=accounts_id)
        accounts = Accounts.objects.all()
        return render(
            request, "accounts/detail.html", {"account": account, "accounts": accounts}
        )
    except ValueError:
        return render(
            request, "actions/likes.html", {"error": "Error realizar la accion"}
        )
