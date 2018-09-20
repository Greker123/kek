var output,input,check;
output=0;
check=false;
document.getElementById("in").value=output;
ans.addEventListener("click",answer);
function answer(){
    var answer,out;
    answer=document.getElementById("in");
    out=eval(answer.value);
    answer.value="="+out;
    check=true;
                 }
function one(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=1;
        output=1;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=1;
        output=1;
                 }
    else if(x!=0){
        document.getElementById("in").value+=1;
                      }
    
              }
function two(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=2;
        output=2;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=2;
        output=2;
                 }
    else if(x!=0){
        document.getElementById("in").value+=2;
                      }
              }
function three(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=3;
        output=3;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=3;
        output=3;
                 }
    else if(x!=0){
        document.getElementById("in").value+=3;
                      }
    
                }
function four(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=4;
        output=4;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=4;
        output=4;
                }
    else if(x!=0){
        document.getElementById("in").value+=4;
                      }
    
                }
function five(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=5;
        output=5;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=5;
        output=5;
                 }
    else if(x!=0){
        document.getElementById("in").value+=5;
                      }
    
                }
function six(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=6;
        output=6;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=6;
        output=6;
                 }
    else if(x!=0){
        document.getElementById("in").value+=6;
                      }
    
              }
function seven(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=7;
        output=7;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=7;
        output=7;
                 }
    else if(x!=0){
        document.getElementById("in").value+=7;
                      }
    
}
function eight(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=8;
        output=8;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=8;
        output=8;
                 }
    else if(x!=0){
        document.getElementById("in").value+=8;
                      }
    
                }
function nine(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=9;
        output=9;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=9;
        output=9;
                 }
    else if(x!=0){
        document.getElementById("in").value+=9;
                      }
    
                }
function zero(){
    x=document.getElementById("in").value;
    if(check==true){
        document.getElementById("in").value=0;
        output=0;
        check=false;
        return 1;
    }
    if(x==0){
        document.getElementById("in").value=0;
        output=0;
                 }
    else if(x!=0){
        document.getElementById("in").value+=0;
                      }
    
                }
function plus(){
    x=document.getElementById("in").value;
    if(x==0){
        document.getElementById("in").value=0;
        
        output=0;
                 }
    
                        
    else{
            document.getElementById("in").value+="+";
        output="+";
        }
    y=x.slice(-1);
    switch(y){
        case "+":
            document.getElementById('in').value=x;
            break;
        case "-": 
            document.getElementById('in').value=x;
            break;
        case "/":
            document.getElementById('in').value=x;
            break;
        case "*":
            document.getElementById('in').value=x;
            break;
        case ".":
            document.getElementById('in').value=x;
            break;
    }
}
function minus(){
    x=document.getElementById("in").value;
    if(x==0){
        document.getElementById("in").value=0;
        
        output=0;
                 }
    
                        
    else{
            document.getElementById("in").value+="-";
        output="-";
        }
    y=x.slice(-1);
    switch(y){
        case "+":
            document.getElementById('in').value=x;
            break;
        case "-": 
            document.getElementById('in').value=x;
            break;
        case "/":
            document.getElementById('in').value=x;
            break;
        case "*":
            document.getElementById('in').value=x;
            break;
        case ".":
            document.getElementById('in').value=x;
            break;
    }
}
function mult(){
    x=document.getElementById("in").value;
    if(x==0){
        document.getElementById("in").value=0;
        
        output=0;
                 }
    
                        
    else{
            document.getElementById("in").value+="*";
        output="*";
        }
    y=x.slice(-1);
    switch(y){
        case "+":
            document.getElementById('in').value=x;
            break;
        case "-": 
            document.getElementById('in').value=x;
            break;
        case "/":
            document.getElementById('in').value=x;
            break;
        case "*":
            document.getElementById('in').value=x;
            break;
        case ".":
            document.getElementById('in').value=x;
            break;
    }
}
function division(){
    x=document.getElementById("in").value;
    if(x==0){
        document.getElementById("in").value=0;
        
        output=0;
                 }
    
                        
    else{
            document.getElementById("in").value+="/";
        output="/";
        }
    y=x.slice(-1);
    switch(y){
        case "+":
            document.getElementById('in').value=x;
            break;
        case "-": 
            document.getElementById('in').value=x;
            break;
        case "/":
            document.getElementById('in').value=x;
            break;
        case "*":
            document.getElementById('in').value=x;
            break;
        case ".":
            document.getElementById('in').value=x;
            break;
    }
}
function dt(){
    x=document.getElementById("in").value;
    document.getElementById("in").value+=".";
    output=".";
    y=x.slice(-1);
    switch(y){
        case "+":
            document.getElementById('in').value=x;
            break;
        case "-": 
            document.getElementById('in').value=x;
            break;
        case "/":
            document.getElementById('in').value=x;
            break;
        case "*":
            document.getElementById('in').value=x;
            break;
        case ".":
            document.getElementById('in').value=x;
            break;
    }
}
function del(){
    x=document.getElementById("in").value;
    if(x!=0){
         x=x.substring(0,x.length-1);
         document.getElementById('in').value=x;
            }
    
}
function res(){
    document.getElementById("in").value=0;
}
    /*if(y=="+"){
        document.getElementById('in').value=x;
    }
    else if(y=="-"){
        document.getElementById('in').value=x;
    }*/
    
    
   /*  if(~x.indexOf("++")){
        x=x.substring(0,x.length-1);
        
     document.getElementById('in').value=x;
        
                        }
   if(~x.indexOf("++")){
        x=x.substring(0,x.length-1);
        
     document.getElementById('in').value=x;
        
                        }
   else if(~x.indexOf("-+")){
        x=x.substring(0,x.length-1);
     document.getElementById('in').value=x;
        document.getElementById("in").value+="-";
                           }
    else if(~x.indexOf("*+")){
        x=x.substring(0,x.length-1);
     document.getElementById('in').value=x;
        document.getElementById("in").value+="*";
                            }
    else if(~x.indexOf("/+")){
        x=x.substring(0,x.length-1);
     document.getElementById('in').value=x;
        document.getElementById("in").value+="/";
                            }
                            
                            
                            function two(){
    if(output==0){
        document.getElementById("in").value=2;
        output=2;
                 }
    else if(output!=0){
        document.getElementById("in").value+=2;
                      }
              }
                            */
               
