from django.http import HttpResponse
from django.shortcuts import render

def homepage(request):
    return render(request,'main.html')
def register(request):
    return render(request,'signup.html')
