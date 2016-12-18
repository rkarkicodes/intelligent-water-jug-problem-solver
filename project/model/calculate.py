## functions of each state

def a(gallons,jug_a,jug_b):
    return (jug_a,gallons[1])

def b(gallons,jug_a,jug_b):
    return (gallons[0],jug_b)

def c(gallons,jug_a,jug_b):
    return (0,gallons[1])

def d(gallons,jug_a,jug_b):
    return (gallons[0],0)

def e(gallons,jug_a,jug_b):
    total=gallons[0]+gallons[1]

    if total>=jug_b:
        return (total-jug_b,jug_b)
    else:
        return "-"

def f(gallons,jug_a,jug_b):
    total=gallons[0]+gallons[1]
    if total<jug_b:
        return (0,total)
    else:
        return "-"

def g(gallons,jug_a,jug_b):
    total=gallons[0]+gallons[1]
    if total>=jug_a:
        return (jug_a,total-jug_a)
    else:
        return "-"

def h(gallons,jug_a,jug_b):
    total=gallons[0]+gallons[1]
    if total<jug_a:
        return (total,0)
    else:
        return "-"


