from prettytable import PrettyTable
import calculate as calc
import itertools
from Queue import Queue


class Searches(object):

    def __init__(self,jug_a,jug_b,goal):
        self.jug_a=jug_a
        self.jug_b=jug_b
        self.start=(0,0)
        self.end=(goal,0)
        self.transition_database={}
        self.display_table=self.create_table(self.jug_a,self.jug_b)
        self.steps=self.prepare_steps(self.jug_a,self.jug_b)

    def create_table(self,jug_a,jug_b):
        table=PrettyTable(["State","a","b","c","d","e","f","g","h"]) # creating header
        table.align["State"]="l"
        state=list(itertools.product(range(jug_a+1),range(jug_b+1)))
        for data in state:
            row=[data,calc.a(data,jug_a,jug_b),calc.b(data,jug_a,jug_b),calc.c(data,jug_a,jug_b),calc.d(data,jug_a,jug_b),calc.e(data,jug_a,jug_b),calc.f(data,jug_a,jug_b),calc.g(data,jug_a,jug_b),calc.h(data,jug_a,jug_b)]
            self.transition_database[row[0]]=row[1:]
            table.add_row(row)
        return table.get_string()

    def prepare_steps(self,jug_a,jug_b):
        steps={ 0: "Fill the {} gallon jug.".format(jug_a),
                1: "Fill the {} gallon jug.".format(jug_b),
                2: "Empty the {} gallon jug.".format(jug_a),
                3: "Empty the {} gallon jug.".format(jug_b),
                4: "Pour water from {} gallon jug into {} gallon jug until {} gallon jug is full.".format(jug_a,jug_b,jug_b),
                5: "Empty water from {} gallon jug into {} gallon jug.".format(jug_a,jug_b),
                6: "Pour water from {} gallon jug into {} gallon jug until {} gallon jug is full.".format(jug_b,jug_a,jug_a),
                7: "Empty water from {} gallon jug into {} gallon jug.".format(jug_b,jug_a)}
        return steps

    def breadth_first(self):
            visited=[]
            nodes=Queue()
            visited.append(self.start)
            exit=0
            step=['Start with empty jugs.']
            result={}

            for n,i in enumerate(self.transition_database[self.start]):
                if i not in visited and type(i) is tuple:
                    visited.append(i)
                    nodes.put([(self.start),(i,n)])


            while not nodes.empty():
                curr=nodes.get()
                for n,i in enumerate(self.transition_database[curr[-1][0]]):

                    if i==self.end:
                        final=[]
                        curr=curr+[(i,n)]
                        exit=1

                        for i in curr:
                            if i!=(0,0):
                                step.append(self.steps[i[-1]])
                        result["steps"]=step
                        for i in curr:
                            if i!=(0,0):
                                final.append(i[0])
                            else:
                                final.append((0,0))
                        result['state_sequence']=final
                        break
                    elif i not in visited and type(i) is tuple:
                        visited.append(i)
                        nodes.put(curr+[(i,n)])
                    else:
                        pass
                if exit==1:
                    print "exit"
                    break
            return result



# a=Searches(3,8,4)
# a=Searches(4,9,5)
#a=Searches(9,4,5)
#print a.breadth_first()
