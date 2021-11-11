function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }

function cal1()
{
  let length=document.getElementById("amount").value;
 
  let umain=document.getElementById("cond1").checked;
  let lmain=document.getElementById("cond2").checked;
  let nmain=document.getElementById("cond3").checked;
  let smain=document.getElementById("cond4").checked;
  let result  = '';
  
  if((length==0)&&(umain==false && lmain==false && nmain==false && smain==false))
  {
    alert('MOVE THE SLIDER TO SELECT THE AMOUNT OF CHARACTERS NEEDED AND SELECT ATLEAST ONE OPTION FROM THE SETTING SECTION')
  }
  else if(length==0){
    alert('MOVE THE SLIDER TO SELECT THE AMOUNT OF CHARACTERS NEEDED');
  }
  else if(umain==false && lmain==false && nmain==false && smain==false){
    alert('SELECT ATLEAST ONE OPTION FROM THE SETTING SECTION');
  }

  let u= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ulen= u.length;
  let l='abcdefghijklmnopqrstuvwxyz';
  let llen=l.length;
  let n='1234567890';
  let nlen=n.length;
  let s='@$&#';
  let slen=s.length;
  let ul='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ullen=ul.length;
  let us='@#$&ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let uslen=us.length;
  let un='1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let unlen=un.length;
  let ls= '@#$&abcdefghijklmnopqrstuvwxyz';
  let lslen=ls.length;
  let ln='1234567890abcdefghijklmnopqrstuvwxyz';
  let lnlen=ln.length;
  let sn='1234567890@#$&';
  let snlen=sn.length;
  let uls='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@$&#';
  let ulslen=uls.length;
  let uln='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  let ulnlen=uln.length;
  let uns='ABCDEFGHIJKLMNOPQRSTUVWXYZ@$&#1234567890';
  let unslen=uns.length;
  let lns='abcdefghijklmnopqrstuvwxyz@$&#1234567890';
  let lnslen=lns.length;
  let ulns='1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@$&#';
  let ulnslen=ulns.length;

  
 
  for ( let i = 0; i < length; i++ ) {
    if(umain==true&&lmain==false&&nmain==false&&smain==false)
    {
      result += u.charAt(Math.floor(Math.random() * 
    ulen));
    }
    else if (umain==false && lmain==true && nmain==false && smain==false) {
      result += l.charAt(Math.floor(Math.random() * 
    llen));
    } 
    else if (umain==false && lmain==false && nmain==true && smain==false) {
      result += n.charAt(Math.floor(Math.random() * 
    nlen));
    }
    else if (umain==false && lmain==false && nmain==false && smain==true) {
      result += s.charAt(Math.floor(Math.random() * 
    slen));
    }
    else if (umain==true && lmain==true && nmain==false && smain==false) {
      result += ul.charAt(Math.floor(Math.random() * 
    ullen));
    }
    else if (umain==true && lmain==false && nmain==false && smain==true) {
      result += us.charAt(Math.floor(Math.random() * 
    uslen));
    }
    else if (umain==true && lmain==false && nmain==true && smain==false) {
      result += un.charAt(Math.floor(Math.random() * 
    unlen));
    }
    else if (umain==false && lmain==true && nmain==false && smain==true) {
      result += ls.charAt(Math.floor(Math.random() * 
    lslen));
    }
    else if (umain==false && lmain==true && nmain==true && smain==false) {
      result += ln.charAt(Math.floor(Math.random() * 
    lnlen));
    }
    else if (umain==false && lmain==false && nmain==true && smain==true) {
      result += sn.charAt(Math.floor(Math.random() * 
    snlen));
    }
    else if (umain==true && lmain==true && nmain==false && smain==true) {
      result += uls.charAt(Math.floor(Math.random() * 
    ulslen));
    }
    else if (umain==true && lmain==true && nmain==true && smain==false) {
      result += uln.charAt(Math.floor(Math.random() * 
    ulnlen));
    }
    else if (umain==true && lmain==false && nmain==true && smain==true) {
      result += uns.charAt(Math.floor(Math.random() * 
    unslen));
    }
    else if (umain==false && lmain==true && nmain==true && smain==true) {
      result += lns.charAt(Math.floor(Math.random() * 
    lnslen));
    }
    else if (umain==true && lmain==true && nmain==true && smain==true) {
      result += ulns.charAt(Math.floor(Math.random() * 
    ulnslen));
    }
  }
  document.getElementById("password1").innerHTML=result;
}

function copyToClipBoard() {

  var content = document.getElementById('password1');
  
  content.select();
  document.execCommand('copy');

  alert("Copied!");
}