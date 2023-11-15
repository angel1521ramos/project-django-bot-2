from django.shortcuts import render, redirect, get_object_or_404
from twitterApp.models import Accounts
from twitter.account import Account
from pathlib import Path
import orjson
import webbrowser
import time


import subprocess
import random

codelist = ['US-C', 'US', 'US-W', 'CA', 'CA-W', 'MX', 'US-N', 'CO', 'EC']


#dar like tweet
def follows_acounts(request):
    try:
        account_id = int(request.POST['account'])
        accounts = Accounts.objects.all()

        for i in range(0, len(accounts), 3):
            for j in range(i, min(i + 3, len(accounts))):
                codechoice = random.choice(codelist)
                subprocess.call("windscribe connect " + codechoice, shell=True)
                username = accounts[j].username
                cookies = orjson.loads(Path(f'twitter.cookies.{username}').read_bytes())
                account = Account(cookies=cookies)
                account.follow(account_id)
                print(f"follow de ... { accounts[j].username }")
                subprocess.call("windscribe disconnect", shell=True)

            if i + 3 < len(accounts):
                print("espera 30 segundos ... se esta cambiando la direccion ip")
                time.sleep(30)

        return redirect("accounts")
    except ValueError:
        return render(
            request, "actions/likes.html", {"error": "Error realizar la accion"}
        )


#dar like tweet
def follow_acount(request, accounts_id):
    try:
        codechoice = random.choice(codelist)
        subprocess.call("windscribe connect " + codechoice, shell=True)
        account_id = int(request.POST['account'])
        account_select = Accounts.objects.get(id=accounts_id)

        username = account_select.username
        
        cookies = orjson.loads(Path(f'twitter.cookies.{username}').read_bytes())
        accountApi = Account(cookies=cookies)
        accountApi.follow(account_id)

        subprocess.call("windscribe disconnect", shell=True)

        account = get_object_or_404(Accounts, pk=accounts_id)
        accounts = Accounts.objects.all()
        return render(
            request, "accounts/detail.html", {"account": account, "accounts": accounts}
        )
    except ValueError:
        return render(
            request, "actions/likes.html", {"error": "Error realizar la accion"}
        )
