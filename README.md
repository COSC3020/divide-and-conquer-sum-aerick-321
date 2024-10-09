# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

T(n)= { 1 if $n\leq 2$}

Get to the base case --> T(n) = {3T(n/3) + O(1)},  T(1) = O(1)

$T(n) = 3(3T (n/9) +O(1)) +O(1)$

$T(n) = 9T(n/9) +3*O(1)) +O(1)$

$T(n) = 9(3T (n/27) +O(1)) +3*O(1)+O(1)$

$T(n) = 27T(n/27) + 9*O(1)+ +3*O(1)) +O(1)$

$T(n) =3^i T(n/3^i)+ (3^{i-1} +3^{i-2} +...+ 3+1)*O(1)$

$n/3^i$ = 1

i = log3n
​
$(3^i -1)/(3-1) = (3^{log3n}-1)/2 = n-1/2$

T(n) = O(n) +O(n) = O(n)
       
Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The array is split roughly even into 3. Then each recursiveley split until you get to the base case when lo equals hi. Is similar to merge sort but divided into 3 instead of 2. Which means the array has to be greater that 2 or it becomes T(1)=1 and just returns the one element in the array. The combination step is constant so it is O(1) instead of O(n).
Instead of being split into 2 like merge sort it is split into 3, so in the equation you replace the 2's with 3's and solve to get a final asymptotic complexity of O(n)


Looked at merge sort code for an outline. Got help from the Professor to subtract the low. Wrote the code in the sum fucntion and use chat GPT for help with the code in the divide and conquor function. Chat GPT also helped me realize I needed to change variable names for it to work.
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
