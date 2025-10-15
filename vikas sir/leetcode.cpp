
#include<iostream>
#include<string>
#include<cmath>
using namespace std;

int main(){
        
    string str = "hello";
    
    int score = 0;
    for (int i = 0; i + 1 < str.size(); ++i){
        score += abs(str[i]-str[i+1]);
    }
    cout << score << endl;
    return 0;
}