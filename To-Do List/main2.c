#include<stdio.h>
#include<stdlib.h>

struct myTask{
    int task_size;
    char* ptr;
};

void createTask(struct myTask* a, int taskSize){
    a->ptr = (char*)malloc(taskSize*sizeof(char));
    printf("Enter your task: \n");
    scanf("%s", a->ptr);
}

void printTask(struct myTask* a){
    printf("%s", a->ptr);
}

int main(){
    struct myTask task1;
    struct myTask task2;
    struct myTask task3;

    createTask(&task1, 50);
    printf("\n");

    printTask(&task1);
    return 0;
}