from django.shortcuts import render, redirect, get_object_or_404
from twitterApp.models import Polls
#from twitter.account import Account

#guardar encuestas
def save_polls(request):
    try:
        array = request.POST['polls']
        polls = array.split(';')
        for x in polls:
            account = x.split('/')
            encuesta = Polls()
            encuesta.title = account[0]
            encuesta.duration = account[2]
            encuesta.counter = 0
            options = account[1].split(',')
            while len(options) < 4:
                options.append('')
            encuesta.optionA = options[0]
            encuesta.optionB = options[1]
            encuesta.optionC = options[2]
            encuesta.optionD = options[3]
            encuesta.save()

        return redirect("polls")
    except ValueError:
        return render(
            request, "polls/polls.html", {"polls": polls, "error": "Error al Guardar la informacion"}
        )

#muestra encuestas
def polls(request):
    polls = Polls.objects.all()
    script = ""
    for x in polls:
        script += x.title + "/" + x.optionA
        if x.optionD:
            script += "," + x.optionB+ "," + x.optionC + "," + x.optionD + "/"
        elif x.optionC:
            script += "," + x.optionB+ "," + x.optionC + "/"
        elif x.optionB:
            script += "," + x.optionB + "/"

        script += str(x.duration) + "; "
    
    script = script[:-2]
    return render(
        request,
        "polls/polls.html",
        {"polls": polls, "script": script},
    )


#detalle de encuestas
def detail_polls(request, polls_id):
    polls = get_object_or_404(Polls, pk=polls_id)
    return render(
        request, "polls/detail.html", {"polls": polls}
    )

#Actualiza la informacion
def update_polls(request, polls_id):
    try:
        polls = get_object_or_404(Polls, pk=polls_id)
        polls.title = request.POST['title']
        polls.optionA = request.POST['optionA']
        polls.optionB = request.POST['optionB']
        polls.optionC = request.POST['optionC']
        polls.optionD = request.POST['optionD']
        polls.duration = request.POST['duration']
        polls.save()
        return redirect("polls")
    except ValueError:
        return render(
            request, "polls/detail.html", {"polls": polls, "error": "Error al actualizar la informacion"}
        )

#Elimina la informacion
def delete_polls(request, polls_id):
    polls = get_object_or_404(Polls, pk=polls_id)
    polls.delete()
    return redirect("polls")
