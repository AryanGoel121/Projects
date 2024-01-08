#include <iostream>
#include <string>

using namespace std;

class Book{
public: 
    // Global Variables Needed for the Book
    string title;
    int pageCount;
    int ISBN;
    bool isCheckedOut = false;
    int dayCheckedOut = -1;
    
    // Constructor
    Book(string bookTitle, int bookPageCount, int bookISBN){
        this->title = bookTitle;
        this->pageCount = bookPageCount;
        this->ISBN = bookISBN;
    } 

    // Getters
    string getTitle(){
        return this->title;
    }
    int getPageCount(){
        return this->pageCount;
    }
    int getISBN(){
        return this->ISBN;
    }
    bool getIsBookCheckedOut(){
        return this->isCheckedOut;
    }
    int getDayCheckedOut(){
        return this->dayCheckedOut;
    }

    // Setters
    void setIsCheckedOut(bool newIscheckedOut, int currentDayCheckedOut){
        this->isCheckedOut = newIscheckedOut;
        setDayCheckedOut(currentDayCheckedOut);
    }
    private: void setDayCheckedOut(int day){
        this->dayCheckedOut = day;
    }
};

int main(){
    Book b1("Mindset", 350, 4680947);
    cout<<b1.pageCount;

    // b1.setDayCheckedOut(5);

    return 0;
}