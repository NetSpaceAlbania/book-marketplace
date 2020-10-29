from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm


def homepage(request):
    return render(request,'main.html')
<<<<<<< HEAD

def register(request):
    form = UserCreationForm()
    return render(request,'signup.html',{'form':form})
=======
def register(request):
    return render(request,'signup.html')
>>>>>>> be25670b5c1e790a3c22ec9e1a1be8e6ebadf712
