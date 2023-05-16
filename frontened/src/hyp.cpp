#include<bits/stdc++.h>
using namespace std;   
vector<int> fn(vector<int> &nums, int random)
{
    int i = 0, j = len;
    while(i<=j)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
} 
int main()
{
    vector<int> v = {1,2,3,4,5,6,7,8,9};
    vector<int> res = fn(v, 3);
}