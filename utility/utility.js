var methods = {}
const readline = require('readline-sync');
//var w = require('');

methods.hello = function()
{
    console.log("Hello World");
}
//module.exports={
//leap year
methods.isLeapYear = function(year,n)
{
    try
    {

        /*var year = readline.questionInt("Enter year to check=");
        var n = year.toString().length;*/
        if(Number.isInteger(year))
        {
            console.log(n);
            if(n===4) 
            {
                console.log("inside 2if n" +n);             
                if(year%4===0)
                    return true
                    //console.log('Year ' +year , 'is leap year');
                else
                    return false
                    //console.log('Year ' +year , 'is not leap year');
            }           
            else
            {
                //console.log("The Year is a 4 Digit number");
                //throw new console.error("The Year is a 4 Digit number");
                throw new Error('The Year is a 4 Digit number');
            }
        }
        /*else
        {
            console.log("Please Enter Valid Input (i.e. integer)");
        }*/
    }
    catch(e)
    {
        return e
        
    }
}


//string replace
methods.SReplace = function (username)
{

    if(username.length<3)
    {
        console.log("Length should be greater than 3");
        console.log("Enter username=");
        SReplace();
    }
    else 
    {
        console.log(username);
        var pr = "Hello <<username>>, How are you?";
        console.log(pr.replace('<<username>>',username));
    }
}

//sum of elements is zero

methods.SumOfElementsIsZero = function (arr1 , n)
{
    var i,j,k;
    for(i=0;i<n-2;i++)
    {
        for(j=i+1;j<n-1;j++)
        {
            for(k=j+1;k<n;k++)
            {
                var sum1 = arr1[i] + arr1[j] + arr1[k];
                if(sum1===0)
                {
                    console.log(+arr1[i], "+" +arr1[j], "+" +arr1[k], "=" +sum1);
                }
                else
                {
                    console.log(+arr1[i],"+" +arr1[j], "+" +arr1[k], "=" +sum1);
                }
            }
        }
    }
}

//Flipcoin
methods.FlipCoin = function (n)
{
    var count = 0;  //for heads
    var num = 0;
    if(n<=0)
    {
        console.log("Number of times should be greater than 0");
    }
    else
    {
        for(var i =0;i<n;i++)
        {
            var ran = Math.random();
            if(ran<0.5)
            {
                count++;
                console.log('H');
            }  
            else
            {
                num++;
                console.log('T');
            }                      
        }

        var HeadPercent = (count/n)*100;
        console.log("Heads Percentage is" +HeadPercent);
        var TailPercent = 100 - HeadPercent;
        console.log("Heads Percentage is" +TailPercent);
    }
}

//powerOfTwo
methods.PowerOfTwo = function ()
{
    if(process.argv.length<2)
        console.log("Please pass value through command line");
    else
    {
        var number = process.argv[2];
        var pow = 1;
        var i = 1;
        while(i<=number)
        {
            pow = 2 * pow;
            console.log(pow);
            i=i+1;
        }
    }
}

//HarmonicNumber

methods.HarmonicNumber = function()
{
    var n = process.argv[2];
    console.log(n);
    var i = 1;
    var m=0;
    while(i<=n)
    {
        var j = 1/i;
        console.log(j);
        
        m = m + j;
        console.log(m);
        i = i+1;
    }
    console.log("Harmonic value " +m);
}

//factors

methods.calculate = function()
{
    var n = readline.question("Enter number to find factors=");
    var i = 1; 
    if(n>2)
    {
        for(i=2;i*i<=n;i++)
        {
            while(n%i == 0)
            {
                console.log("i=" +i);
                n=n/i;
                console.log(n);
            }
        }
    }
    else
    {
        console.log("please enter number greater than 1");
        methods.calculate();
    }
}

//distance
methods.Distance = function()
{
    if(process.argv.length<3)
        console.log("Please enter numbers from command line");
    else
    {
        var x = process.argv[2];
        var y = process.argv[3];
        var x = Math.pow(x,2);
        var y = Math.pow(y,2);
        var z = x+y;
        var distance = Math.sqrt(z);
        console.log("Distance is " +distance);
    }
}

//WindChill
methods.WindChill = function ()
{
    if(process.argv.length<4)
      console.log("Please enter numbers from command line");
    else
    {
        var t = process.argv[2];
        var v = process.argv[3];
        if(t<=50 && v<120 && v>=3)
        {
            var a = 0.6215 * t;
            var b = 0.4275 * v;
            var c = Math.pow(v,0.16);
            var d = (b-35.75)*c;
            var windchill = 35.74 + a + d;
            console.log("Windchill = "+windchill);
        }
        else
        {
            console.log("The Temperature should be less than 50 and speed should be greater than 3 and less than 120");
        }
      
    }

}

//Quadratic
methods.Quadratic = function ()
{
    var z=-10;
    var a = readline.question("Enter a=");
    var b = readline.question("Enter b=");
    var c = readline.question("Enter c=");
    var delta = (b*b) - (4*a*c);
    console.log(delta);
    if(delta>0)
    {
        console.log("Roots are Real and Unequal");
        var srt = Math.sqrt(delta);
        var x1=0,x2=0;
        x1 = ((-b)+srt)/(2*a);
        x2 = ((-b)-srt)/(2*a);
        console.log("Two roots are...");
        console.log("x1 = "+x1 ,"x2 = "+x2);
    }
    else if(delta<0)
        console.log("Roots are Imaginary");
    else
    {
        console.log("Roots are real")
        var r1,r2;
        r1=(-b)/2*a;
        r2=(-b)/2*a;
    }
    
}

//binarySearch
methods.BinarySearch = function(arr, l, r, x)
{

    if(r>=l)
    {
        var mid = Math.floor((l + r)/2);
        if(arr[mid]===x)
        {      
            console.log("Index= " +mid);
            return true; 
        }
        else if(arr[mid].localeCompare(x)>0)
        {
            methods.BinarySearch(arr, l, mid-1,x);
        }
        else
        {
            methods.BinarySearch(arr, mid+1, r, x);
        }
    }
    else
    {
        console.log("Element not found");
        return false
    }
}

//Bubble Sort
methods.BubbleSort = function(array, n)
{
    var temp=0;
    for(var i=0; i<n; i++)
    {
        for(var j=0; j<n-1-i; j++)
        {
            if(array[j]>array[j+1])
            {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    for(var i=0;i<n;i++)
    {
        console.log(array[i]);
    }
}

//string anagram
methods.Anagram = function()
{
    var str1 = readline.question("Enter string1=");
    var str2 = readline.question("Enter string2=");
    var check = false;
    var n1 = str1.length;
    var n2 = str2.length;
    if(n1==n2)
    {
        for(var i=0;i<n1;i++)
        {
            for(var j=0;j<n1;j++)
            {
                if(str1.charAt(i)==str2.charAt(j))
                {
                    check = true;
                    break;
                }
            }
            if(check != true)
            {
                check = false;
                break;
            }
        }
        if(check == true)
            console.log('Strings are Anagram');
        else
            console.log('Strings are not Anagram');
    }
    else 
        console.log('Lengths of the two strings should be equal to be Anagram');
}

//PrimeNoRange
methods.RangeOfPrime = function()
{
    /*var start = readline.question("Enter the start index to find Prime Number in range=");
    var last = readline.question("Enter last index=");*/

    for(var i=1;i<=1000;i++)
    {
        var prime = new Array(1000);
        var count = 0;
        if(i==1)
        {
            console.log("1 is neither prime nor composite");
        }
        else
        {
            for(var j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {
                    count++;
                    break;
                }
                
            }
            if(count == 0)
            {
                console.log(i);
            }
            console.log(prime.join(" "));  
        }
    }
}

//InsertionSort
methods.InsertionSort = function()
{
    var m = readline.questionInt("Enter array size=");
    var insertion = new Array(m);
    for(var i=0;i<m;i++)
    {
        insertion[i]=readline.question("enter element=");
    }
    console.log("String elements before sorting  "+insertion.join(" "));
    //insertion logic
    var temp,j;
    for(var i=1;i<m;i++)
    {
        temp = insertion[i];
        j=i-1;
        while(j>=0 && insertion[j].localeCompare(temp)>0)
        {
            insertion[j+1]=insertion[j];
            j=j-1;
        }        
        insertion[j+1]=temp; 
    }
    console.log("sorted array " +insertion.join(" "));
}

//2dArray
methods.TwoDArray = function()
{
    var m = readline.questionInt("Enter Number of Rows =");  //row
    var n = readline.questionInt("Enter Number of Columns=");  //column
    var myArray = new Array(m);
    for(var i=0;i<m;i++)
    {
        myArray[i] = new Array(n)
    }
    for(var i=0;i<m;i++)
    {
        for(var j=0;j<n;j++)
        {
            myArray[i][j] =readline.question("Enter Element=");
        }
    }
    console.log(myArray);
} 

//merge sort
/*

methods.MergeSort=function()
{
    var n = readline.questionInt("Enter array size=");
    var merge = new Array(n);
    for(var i=0;i<n;i++)
    {
        merge[i]=readline.question("enter element=");
    }
    console.log("String elements before sorting  "+merge.join(" "));
    var low = 0;
    var high = (merge.length-1);
    //methods.Sort();
    methods.Divide(merge, low, high);
}

/*methods.Sort = function()
{
    var tempArray = new Array(100);
    this.tempArray = merge;
    methods.Divide(merge, low, high);
}*/
/*
methods.Divide= function(merge, low, high)
{
    if(low<high)
    {
        var m = (low + (high-low))/2;
        methods.Divide(merge,low,m);
        methods.Divide(merge,m+1,high);
        methods.Merge(merge,low,m,high);
    }

}

methods.Merge(merge,low,m,high)
{
    var tempArray = new Array(100);
    for(var i=l;i<h;i++)
    {
        tempArray[i] = merge[i];
    }
    var i = low;
    var j = m+1;
    var k = low;
    while(i<=j && i<=high)
    {
        if(tempArray[i].localeCompare(tempArray[j])<0)
        {
            merge[k]=tempArray[i];
            i++;
        }
        else
        {
            merge[k]=tempArray[j]
            j++;
        }
    }
}*/

//Question to find your number
methods.FindNumber = function(array,l,r)
{

    if(r>=l)
    {
        var mid = Math.floor((l + r)/2);
        //console.log("Please enter only true or false");
        console.log("Is number less than or equal to ..(if equal enter true.. else false)"+mid)

            var ans=readline.question();
            if(l===r)
                console.log("Your guessed number is="+mid);
            else if(ans.localeCompare('true')===0 || ans.localeCompare('True')===0)
            {
                methods.FindNumber(array,l,mid);
            }
            else if(ans.localeCompare('false')===0 || ans.localeCompare('False')===0)
            {
                methods.FindNumber(array,mid+1,r);
            }
    }

}
module.exports= methods 