from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm


def homepage(request):
    return render(request,'main.html')


def register(request):
    form = UserCreationForm()
    return render(request,'signup.html',{'form':form})

def register(request):
    return render(request,'signup.html')

