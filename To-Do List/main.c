#include<stdio.h>
#include<stdlib.h>
#include<string.h>

typedef struct task{
    char str[50];
}tsk;

void printTask(tsk task1, tsk task2, tsk task3){
    printf("%s\n", task1.str);
    printf("%s\n", task2.str);
    printf("%s\n", task3.str);

}

void editTask(char* ptr){
    if (ptr == NULL) {
        return;
    } else {
        strcpy(ptr, "Fold the Laundry");
    }
}

void deleteTask(char* ptr){
    strcpy(ptr, "");
}

void markComplete(char* ptr){
    strcat(ptr, ", -----Completed");
}

int main(){

    tsk task1, task2, task3;
    tsk* ptr;
    
    // Initializing and printing the Tasks!
    printf("Here are all the tasks in your to-do list: \n");
    strcpy(task1.str, "Do the laundry");
    strcpy(task2.str, "Get Groceries from FreshCo");
    strcpy(task3.str, "Continue DSA with Time Complexity");
    printTask(task1, task2, task3);
    printf("-----------------------------------------\n");
    printf("\n");

    // Deleting a Task
    printf("Deleting task2: \n");
    ptr = &task2;
    deleteTask((char*)ptr);
    printTask(task1, task2, task3);
    printf("-----------------------------------------\n");
    printf("\n");

    // Marking a Task as complete
    printf("Marking task3 as complete: \n");
    markComplete(task3.str);
    printTask(task1, task2, task3);
    printf("-----------------------------------------\n");
    printf("\n");

    // Editing a task
    printf("Editing task1 to something new: \n");
    editTask(task1.str);
    printTask(task1, task2, task3);
    printf("-----------------------------------------\n");
    return 0;

}