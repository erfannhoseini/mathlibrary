 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// math Number

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scaleNum(v1,v2){
  return v1-(v1%v2);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function digitCounter(n1) {
  this.n1=int(n1);
  console.log(this.n1);
  this.n2=0;
  while (int(abs(this.n1))!=0) {
    this.n1/=10;
    this.n2++;
  }
  return this.n2;
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function limitFloat(n, p) {
  return parseInt(n*Math.pow(10, p))/Math.pow(10, p)  ;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//function constrain(v0,v1,v2){
//  if(v0<v1){
//    this.varRetrun =v1;
//  }else if(v0>v2){
//    this.varRetrun =v2;
//  }else{
//    this.varRetrun =v0;
//  }
//  return this.varRetrun ;
//}

 
//function map(n, start1, stop1, start2, stop2) {
//  return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
//} 


//function lerpColor(c1,c2,n){
//  return { r:lerp(c1.r,c2.r,constrain(n,0,10)),g: lerp(c1.g,c2.g,constrain(n,0,10)), b : lerp(c1.b,c2.b,constrain(n,0,10))} ;
//}

//function lerp(v0,v1,v2){
//   return v1+(v0-v1)*v2;
//}











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// math geometry

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function inte(p0,p1,p2,p3) {

  var x0 = p0.x , x1 = p1.x , x2 = p2.x , x3 = p3.x ;
  var y0 = p0.y , y1 = p1.y , y2 = p2.y , y3 = p3.y ;

  var dem = (y3 - y2) * (x1 - x0) - (x3 - x2) * (y1 - y0);
  if (dem == 0 ) {
    return;
  }
  var ua_num = (x3 - x2) * (y0 - y2) - (y3 - y2) * (x0 - x2);
  var ub_num = (x1 - x0) * (y0 - y2) - (y1 - y0) * (x0 - x2);

  var ua = ua_num / dem;
  var ub = ub_num / dem;


  if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
    var x =  (x0 + ua * (x1 - x0));
    var y =  (y0 + ua * (y1 - y0)); 
    var v = {x:x, y:y};
    return v;
  }

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function vector() {

  if (arguments.length==2) {
    this.x=arguments[0];
    this.y=arguments[1];
  } else if (arguments.length==3) {
    this.x=arguments[0];
    this.y=arguments[1];
    this.z=arguments[2];
  }
  this.xy = {x:this.x,y:this.y};
  this.xz = {x:this.x,y:this.z};
  this.yz = {x:this.y,y:this.z};
  this.yx = {x:this.y,y:this.x};
  this.zy = {x:this.z,y:this.y};
  this.zx = {x:this.z,y:this.x};
  
  
  this.initXY = function(x,y){
    this.x=x;
    this.y=y;
  }
  this.initXZ = function(x,z){
    this.x=x;
    this.z=z;
  }
  this.initYZ = function(y,z){
    this.y=y;
    this.z=z;
  }
  this.initYX = function(y,x){
    this.y=y;
    this.x=x;
  }
  this.initZY = function(z,y){
    this.z=z;
    this.y=y;
  }
  this.initZX = function(z,x){
    this.z=z;
    this.x=x;
  }
  
  
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function vec2() {

  if (arguments.length==4) {
    this.x1=arguments[0];
    this.y1=arguments[1];
    this.x2=arguments[2];
    this.y2=arguments[3];
  } else if (arguments.length==6) {
    this.x1=arguments[0];
    this.y1=arguments[1];
    this.z1=arguments[2];
    this.x2=arguments[3];
    this.y2=arguments[4];
    this.z2=arguments[5];
  }
}

 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function getRadinas(p0,p1){
  let dx1 = p0.x - p1.x;
  let dy1 = p0.y - p1.y;
  let angle  = atan2(dy1, dx1) ;
  return angle;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function polygonArea(){

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function angle(xx1, yy1, xx2, yy2) {
 
  let var1 =  dist(xx2, yy2, xx1, yy1) ;
  let var2 =  dist(xx1, yy1, xx2, yy1) ;
  let var3 ;

  if (yy2 <=yy1 && xx2 <=xx1) {
    var3 = 90 - degrees(pow((var2 ) /(var1), 2)*PI/2);
  } else if (yy2 <=yy1 && xx1 <=xx2) { 
    var3 = 90 + degrees(pow((var2 ) /(var1), 2)*PI/2);
  } else if (yy1 <=yy2 && xx1 <=xx2) {
    var3 = 270 - degrees(pow((var2) /(var1), 2)*PI/2);
  } else if (yy1 < yy2 && xx2 < xx1) {
    var3 = 270 + degrees(pow((var2) /(var1), 2)*PI/2);
  }
 
  return var3;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Parangle(p0 , p1 , n1) {
  this.n2 = -n1/distance(p0.x, p0.y, p1.x, p1.y)*1.4143;
  this.n3 = 2;
  return {p0 : {x:limitFloat(lerp( p0.x,p1.x,this.n2),this.n3), y :limitFloat(lerp( p0.y, p1.y,this.n2),this.n3)} , p1: {x :limitFloat(lerp( p0.x, p1.x, 1-this.n2),this.n3), y :limitFloat(lerp( p0.y, p1.y, 1-this.n2),this.n3)} };
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function linefromangle(v1,v2,v3,a1){
  this.v1=v1;
  this.v2=v2;
  this.v3=v3;
  this.v4 = radians(a1);
  return { x1 :  sin(this.v4)*this.v3+this.v1 , y1 :  cos(this.v4)*this.v3+this.v2 , x2  : sin(this.v4)*this.v3*-1+this.v1, y2 : cos(this.v4)*this.v3*-1+this.v2} ;
  

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fixTodeg(){
 
  if(arguments[0]>=0){
    this.var1= arguments[0]%360;
  }else{
    this.var1= abs(arguments[0])%360;
    this.var1= 360-this.var1;
  }
 
  return this.var1%360;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function distance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;
  return Math.sqrt(x * x + y * y);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function rotate2D(vector, angle) {
  var theta = angle * Math.PI / 180; // radians
  var matrix = [  Math.cos(theta), Math.sin(theta), -Math.sin(theta), Math.cos(theta)];

  return {
  x:
    matrix[0] * vector.x + matrix[1] * vector.y,
    y:
    matrix[2] * vector.x + matrix[3] * vector.y
  };
}





function perimeterRightTri(p0,p1,p2){
  return dist(p0.x,p0.y,p1.x,p1.y)*dist(p1.x,p1.y,p2.x,p2.y)/2;
}
function perimeterTri(p0,p1,p2){
  perimeterRightTri(p0,p1,p2);
 
}

function perimeterShape(a){
  for(let nj=0;nj<a.length;nj++){
    
    
  }
  
}







































































































































///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 
 
 
 
function Smaller2D(v1,v2,v3){
 this.aArray=v3;
 this.bArray=[];
 for(let fcre=0;fcre<this.aArray.length;fcre++){
   this.conW = constrain(this.aArray[fcre].w-v2*2,v1,this.aArray[fcre].w-v2*2);
   this.conH = constrain(this.aArray[fcre].h-v2*2,v1,this.aArray[fcre].h-v2*2);
   this.bArray.push({x:this.aArray[fcre].x+(this.aArray[fcre].w-this.conW)/2,y:this.aArray[fcre].y+(this.aArray[fcre].h-this.conH)/2,w:this.conW,h:this.conH});
 }
 
  return this.bArray;
  
}


function SmallerObj2D(v1,v2,v3){
 this.objfunc=v3;
  
 this.conW = constrain(this.objfunc.w-v2*2,v1,this.objfunc.w-v2*2);
 this.conH = constrain(this.objfunc.h-v2*2,v1,this.objfunc.h-v2*2);
 
 return {x:this.objfunc.x+(this.objfunc.w-this.conW)/2,y:this.objfunc.y+(this.objfunc.h-this.conH)/2,w:this.conW,h:this.conH} ;
  
}



function SmallerObj3D(v1,v2,v3){
 this.objfunc=v3;
  
 this.conW = constrain(this.objfunc.w-v2*2,v1,this.objfunc.w-v2*2);
 this.conH = constrain(this.objfunc.h-v2*2,v1,this.objfunc.h-v2*2);
 this.conD = constrain(this.objfunc.d-v2*2,v1,this.objfunc.d-v2*2);
 
 return {x:this.objfunc.x+(this.objfunc.w-this.conW)/2,y:this.objfunc.y+(this.objfunc.h-this.conH)/2,z:this.objfunc.z+(this.objfunc.d-this.conD)/2,w:this.conW,h:this.conH,d:this.conD} ;
  
}



function Smaller3D(v1,v2){
 this.aArray=v2;
 this.bArray=[];
 for(let fcre=0;fcre<this.aArray.length;fcre++){
   this.bArray.push({x:this.aArray[fcre].x+v1,y:this.aArray[fcre].y+v1,z:this.aArray[fcre].z+v1,w:this.aArray[fcre].w-v1*2,h:this.aArray[fcre].h-v1*2,d:this.aArray[fcre].d-v1*2});
 }
 

}


Array.prototype.transVerts=function(n,n1){
  for(let mii=0;mii<this.length;mii++){
    this[mii].x+=n;
    this[mii].y+=n1;
    
  }
  
  
}

Array.prototype.scaleVerts=function(n,n1){
  if(n1=="center"){
    let cen0=shapeXYWH(this);
 
    for(let mii=0;mii<this.length ;mii++){
      this[mii].x-=cen0.x+cen0.w/2   ;
      this[mii].y-=cen0.y+cen0.w/2   ;
    }
    for(let mii=0;mii<this.length ;mii++){
      this[mii].x*=n;
      this[mii].y*=n;
    }
    let cen1=shapeXYWH(this);
    for(let mii=0;mii<this.length ;mii++){
      this[mii].x+=cen0.x +cen0.w/2   ;
      this[mii].y+=cen0.y +cen0.w/2  ;
    }
  }else{
    for(let mii=0;mii<this.length;mii++){
      this[mii].x*=n;
      this[mii].y*=n;
    
    }
  }
  
  
  
}

Array.prototype.foundVertIdx=function(v){
  this.bolArridx=false;
  for(let mii=0;mii<this.length;mii++){
    if(this[mii][0]==v[0]&&this[mii][1]==v[1]){
      this.bolArridx=true;
      break;
    }else{
      this.bolArridx=false;
    }
 
    
  }
  return this.bolArridx;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function vertSorter(objsks){
  
   let firstPoint = dist(0,0,objsks[0].x,objsks[0].y);
   let indexFirstP=0;
   for(let imm=0;imm<objsks.length;imm++){
      if(firstPoint>dist(0,0,objsks[imm].x,objsks[imm].y)){
        firstPoint=dist(0,0,objsks[imm].x,objsks[imm].y);
        indexFirstP =imm;
      }
   }
   
   this.pVers =[];
   for(let imm=indexFirstP;imm<objsks.length+indexFirstP;imm++){
     this.pVers.push(objsks[(imm)%objsks.length]);
   }
  
   return this.pVers;
}



function clearVert(obj) {
  // this function clear beteewn to vert seam angle
  this.arrayVert = obj;
  this.indxC=0;
 
  while(this.indxC<arrayVert.length){
     if( (this.arrayVert[this.indxC].x) ==  (this.arrayVert[(this.indxC+1)% this.arrayVert.length].x) &&  (this.arrayVert[this.indxC].y) ==  (this.arrayVert[(this.indxC+1)% this.arrayVert.length].y)){
       this.arrayVert.cut(this.indxC);
     }else{
       this.indxC++;
     }
  }
   
  this.indxC=0; 
  while(this.indxC<this.arrayVert.length ){ 
    this.a1 = (getRadinas({x: (this.arrayVert[this.indxC].x),y: (this.arrayVert[this.indxC].y)}, {x: (this.arrayVert[(this.indxC+1)%this.arrayVert.length].x),y: (this.arrayVert[(this.indxC+1)%this.arrayVert.length].y)} )*10 ) ;
    this.a2 = (getRadinas({x: (this.arrayVert[this.indxC].x),y: (this.arrayVert[this.indxC].y)}, {x: (this.arrayVert[(this.indxC+2)%this.arrayVert.length].x),y: (this.arrayVert[(this.indxC+2)%this.arrayVert.length].y)} )*10 ) ;
    if(this.a1==this.a2){
      this.arrayVert.cut((this.indxC+1)%this.arrayVert.length);
    }else{
      this.indxC++; 
    }
  }
  
  //if(this.arrayVert.length>0){
  //   if(parseInt(this.arrayVert[0].x)!=parseInt(this.arrayVert[this.arrayVert.length-1].x)||parseInt(this.arrayVert[0].y)!= parseInt(this.arrayVert[this.arrayVert.length-1].y)){
  //     this.arrayVert.push(this.arrayVert[0]);
  //   }
  //}
  return this.arrayVert;
}


function subdivide(a,n){
  let subdivideArrVert=[];
  
  for(let i=0;i<a.length ;i++){
   for(let j=0;j<1;j+=1/n){
     subdivideArrVert.push({x:lerp(a[i].x,a[(i+1)%a.length].x,j),y:lerp(a[i].y,a[(i+1)%a.length].y,j)});
   }
  }
  return subdivideArrVert;
}



function subdivide1(a,n){
  let subdivideArrVert=[];

  
  
  for(let i=0;i<a.length ;i++){
    if(distance(a[i].x, a[i].y, a[(i+1)%a.length].x, a[(i+1)%a.length].y)!=0 && 1>=(n/distance(a[i].x, a[i].y, a[(i+1)%a.length].x, a[(i+1)%a.length].y)*1.4143)){
      this.n =0;
      let lerpindex =0;
 
     while(lerpindex<1 -(n/distance(a[i].x, a[i].y, a[(i+1)%a.length].x, a[(i+1)%a.length].y)*1.4143)){
       lerpindex =  this.n/distance(a[i].x, a[i].y, a[(i+1)%a.length].x, a[(i+1)%a.length].y)*1.4143;
       subdivideArrVert.push({x:lerp(a[i].x,a[(i+1)%a.length].x,lerpindex),y:lerp(a[i].y,a[(i+1)%a.length].y,lerpindex)});
       this.n+=n ;
     }
     
    }
     
   
  }
 
  this.indxC=0;
 
  while(this.indxC<subdivideArrVert.length){
     if( parseInt(subdivideArrVert[this.indxC].x) ==  parseInt(subdivideArrVert[(this.indxC+1)% subdivideArrVert.length].x) &&  parseInt(subdivideArrVert[this.indxC].y) ==  parseInt(subdivideArrVert[(this.indxC+1)% subdivideArrVert.length].y)){
       subdivideArrVert.cut(this.indxC);
     }else{
       this.indxC++;
     }
  }
 
  return subdivideArrVert;
}







function checkPoly(o){
  let bollC=false;
  let arroVert=[];
  arroVert.push(o[0]);
  for(let i=0;i<o.length;i++){
    for(let j=0;j<arroVert.length;j++){
      if(parseInt(o[i].x)!=parseInt(arroVert[j].x)||parseInt(o[i].y)!=parseInt(arroVert[j].y)){
        arroVert.push(o[i]);
        
      }
    
    }
    if(arroVert.length>2){
      bollC=true;
      break;
      
    }
  }
  
  
  return bollC;
  
}





//function clearVert(obj) {
//  // this function clear beteewn to vert seam angle
//  let sampleObj = [];
//  for (let c=0; c<obj.length; c++) {
//    let objVert = null;
//    sampleObj.push(obj[c][0]);
     
//    for (let a=0; a<obj[c].length  ; a++) {
  
//      // this lines code copmare the angle value this index vert 0 , 1 with vert 0 ,2 
//      let a1 =  (getRadinas({x:int(obj[c][a].x),y:int(obj[c][a].y)}, {x:int(obj[c][(a+1)%obj[c].length].x),y:int(obj[c][(a+1)%obj[c].length].y)} )) ;
//      let a2 =  (getRadinas({x:int(obj[c][a].x),y:int(obj[c][a].y)}, {x:int(obj[c][(a+2)%obj[c].length].x),y:int(obj[c][(a+2)%obj[c].length].y)} ));
//      console.log(a1, a2);
//      if ( a1 == a2 ){
        
//        objVert = obj[c][a+2];
        
//      } else  {
        
//        if (objVert){
//          sampleObj.push(objVert);
//        } else if (objVert==null){
//          sampleObj.push(obj[c][a+1]);
//        }
        
//        objVert = obj[c][a+2];
        
//      }
//      if (a==obj[c].length-3) {
//        sampleObj.push(obj[c][obj[c].length-1]);
//      }
      
      
//    }
   
   
   

//    obj[c] = sampleObj;
    
    
//  }
 
//  return obj;
//}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////









function checkLinesObj(){
  if(arguments.length==5){
    this.xc1=arguments[0];
    this.yc1=arguments[1];
    this.xc2=arguments[2];
    this.yc2=arguments[3];
    this.objChLi=arguments[4];
    
  }else if(arguments.length==2){
    this.xc1=arguments[0].x1;
    this.yc1=arguments[0].y1;
    this.xc2=arguments[0].x2;
    this.yc2=arguments[0].y2;
    this.objChLi=arguments[1];
  }
  let idxnum ;
  for(let ib=0;ib<this.objChLi.length-1;ib++){
    if(this.objChLi[ib].x==this.xc1&&this.objChLi[ib].y==this.yc1&&this.objChLi[ib+1].x==this.xc2&&this.objChLi[ib+1].y==this.yc2){
      idxnum=ib;
      break;
    }
  }
  return idxnum;
}




function check2obj(o0,o1){
 
  let bol=true ;
  for(let ib=0;ib<o0.length;ib++){
    if(o0[ib].x==o1[ib].x&&o0[ib].y==o1[ib].y){
      bol=true ;
      
    }else{
      bol=false;
      break;
      
    }
  }
  return bol;
}

//function checkobjinobj(o0,o1){
 
//  let bol=false;
//  for(let ib=0;ib<o0.length;ib++){
//    let p0 =o0[ib];
//    let p1 =o0[ib];
//     for(let nb=0;nb<o1.length;nb++){
//      let p0 =o1[bb];
//      let p1 =o1[ib];
       
//    }
//  }
//  console.log(bol);
//  return bol;
//}
 
function checkobjinobj(o0,o1){
 
  let bol=false;
  for(let ib=0;ib<o0.length;ib++){
    
    if(!checkPointinobj(o0[ib].x,o0[ib].y,o1)){
      bol=false ;
      
    }else{
      bol=true;
      break;
      
    }
  }
  return bol;
}
 


 
function checkobjInteLine(o0,p2,p3){
 
  let bol=false;
  for(let ib=0;ib<o0.length;ib++){
    let p0= new vector(o0[ib].x,o0[ib].y);
    let p1= new vector(o0[(ib+1)%o0.length].x,o0[(ib+1)%o0.length].y);
    if(!inte(p0,p1,p2,p3)){
      bol=false ;    
    }else{
      bol=true;
      break;
      
    }
  }
  return bol;
}
 



function checkPointinobj(x,y,o) {
 
  this.bol1=false;
  this.bol2=false;
  this.bol3=false;
  this.bol4=false;
  this.x = x;
  this.y = y;
  this.objArrayCh =o;
  if(this.objArrayCh[0].x!=this.objArrayCh[this.objArrayCh.length-1].x&&this.objArrayCh[0].y!=this.objArrayCh[this.objArrayCh.length-1].y){
    this.objArrayCh.push(this.objArrayCh[0]);
  }
  let p0 = new vector(this.x, this.y);
  let p1 = new vector( -dm*2 , this.y- 2);
  let p2 = new vector( dm*2, this.y+ 2 );
  let p3 = new vector(this.x+ 2 ,-dm*2);
  let p4 = new vector(this.x- 2 , dm*2);
  
 
 
  for (let ich=0; ich<this.objArrayCh.length-1; ich++) {
      
      this.l =Parangle(this.objArrayCh[ich]  ,this.objArrayCh[ich+1] , 0);
 
      if (inte( p0, p1,this.l.p0,this.l.p1)&& this.bol1==false) {
        this.bol1 = true;
      }else if(inte( p0,p1, this.l.p0,this.l.p1)&& this.bol1==true){
        this.bol1 = false;
      }
      if (inte( p0, p2,this.l.p0,this.l.p1) && this.bol2==false) {
        this.bol2 = true;
      }else if(inte( p0, p2,this.l.p0,this.l.p1) && this.bol2==true){
        this.bol2 = false;
      }
      if (inte( p0, p3,this.l.p0,this.l.p1) && this.bol3==false) {
        this.bol3 = true;
      }else if(inte( p0,p3,this.l.p0,this.l.p1) && this.bol3==true){
        this.bol3 = false;
      }
      if (inte( p0,p4, this.l.p0,this.l.p1) && this.bol4==false) {
        this.bol4 = true;
      }else if(inte(p0,p4, this.l.p0,this.l.p1) && this.bol4==true){
        this.bol4 = false;
      }
 
  }
  
  return ( this.bol1 && this.bol2  && this.bol3 && this.bol4 );
}





 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 

function centerobj(o){
  let x0=o[0].x;
  let x1=o[0].x;
  let y0=o[0].y;
  let y1=o[0].y;
  for(let oi=0;oi<o.length;oi++){
    if(x0>o[oi].x){
      x0 = o[oi].x;
    }
    if(x1<o[oi].x){
      x1 = o[oi].x;
    }
    
    if(y0>o[oi].y){
      y0 = o[oi].y;
    }
    if(y1<o[oi].y){
      y1 = o[oi].y;
    }
    
    
  }
  return new vector(lerp(x0,x1,0.5),lerp(y0,y1,0.5));
  
}


 

function shapeCenter(sca1){
    this.shapeArray = sca1;
    this.scVarX1=this.shapeArray[0].x;
    this.scVarX2=this.shapeArray[0].x;
    this.scVarY1=this.shapeArray[0].y;
    this.scVarY2=this.shapeArray[0].y;
    
    for(let is=0;is<this.shapeArray.length;is++){
      
      if( this.scVarX1 >  this.shapeArray[is].x  ){
        this.scVarX1=this.shapeArray[is].x;
      }
       if( this.scVarX2 <  this.shapeArray[is].x  ){
        this.scVarX2=this.shapeArray[is].x;
      }
      if( this.scVarY1 >  this.shapeArray[is].y  ){
        this.scVarY1=this.shapeArray[is].y;
      }
       if( this.scVarY2 <  this.shapeArray[is].y  ){
        this.scVarY2=this.shapeArray[is].y;
      }
  
    }
    
   
    return inte(new vec2(lerp(this.scVarX1,this.scVarX2,0.5),0,lerp(this.scVarX1,this.scVarX2,0.5),600),new vec2(0,lerp(this.scVarY1,this.scVarY2,0.5),600,lerp(this.scVarY1,this.scVarY2,0.5)));
     
  }
  
  
  
  
function shapeCenter1(c){
  this.arrayVert = c;
  for(let i=0;i<1;i++){
   let arraymiddlepoint=[];
   for(let j=0;j<this.arrayVert.length-1;j++){
    arraymiddlepoint.push(new vector(lerp(this.arrayVert[j].x,this.arrayVert[j+1].x,0.5),lerp(this.arrayVert[j].y,this.arrayVert[j+1].y,0.5)));
   }
   if(arraymiddlepoint[0].x!=arraymiddlepoint[arraymiddlepoint.length-1].x||arraymiddlepoint[0].y!=arraymiddlepoint[arraymiddlepoint.length-1].y){
     arraymiddlepoint.push(arraymiddlepoint[0]);
   }
   this.arrayVert =  arraymiddlepoint;
  }
  
  return centerobj(this.arrayVert);
}







function shapeCenter2(c){
 
   let x =0;
   let y =0;
   for(let j=0;j<c.length ;j++){
     x+=c[j].x;
     y+=c[j].y;
   }
  
  return new vector(x/c.length,y/c.length);
}







 

function shapeCenter3(c){
 
   let arrayVert = c;
   //arrayVert = arrayVert.slice(arrayVert.length-4,arrayVert.length-1);
   
   let arraymiddlepoint=[];
 
     for(let j=0;j< arrayVert.length-1;j++){
      arraymiddlepoint.push(new vector(lerp( arrayVert[j].x, arrayVert[j+1].x,0.5),lerp( arrayVert[j].y, arrayVert[j+1].y,0.5)));
     }
     if(arraymiddlepoint[0].x!=arraymiddlepoint[arraymiddlepoint.length-1].x||arraymiddlepoint[0].y!=arraymiddlepoint[arraymiddlepoint.length-1].y){
       arraymiddlepoint.push(arraymiddlepoint[0]);
     }
     arrayVert =  arraymiddlepoint;
 
   console.log(arrayVert);
   return centerobj( arrayVert);
}




 

function shapeCenter4(c){
 
   let arrayVert = c;
   //arrayVert = arrayVert.slice(arrayVert.length-4,arrayVert.length-1);
   
   let arraymiddlepoint=[];
 
     for(let j=0;j< arrayVert.length-1;j++){
      arraymiddlepoint.push(new vector(lerp( arrayVert[j].x, arrayVert[j+1].x,0.5),lerp( arrayVert[j].y, arrayVert[j+1].y,0.5)));
     }
     if(arraymiddlepoint[0].x!=arraymiddlepoint[arraymiddlepoint.length-1].x||arraymiddlepoint[0].y!=arraymiddlepoint[arraymiddlepoint.length-1].y){
       arraymiddlepoint.push(arraymiddlepoint[0]);
     }
     arrayVert =  arraymiddlepoint;
 
   return arrayVert[0];
}



function shapeCenter5(o){
 
   let x0=o[0].x;
   let x1=o[0].x;
   let y0=o[0].y;
   let y1=o[0].y;
   for(let oi=0;oi<o.length;oi++){
    if(x0>o[oi].x){
      x0 = o[oi].x;
    }
    if(x1<o[oi].x){
      x1 = o[oi].x;
    }
    if(y0>o[oi].y){
      y0 = o[oi].y;
    }
    if(y1<o[oi].y){
      y1 = o[oi].y;
    }
    
     
   }
   
   let cps =[];
   for(let oi=0;oi<o.length-1;oi+=1){
     
      let a = Parangle(new vector(x0,y0) , new vector(x1,y1) ,2);
      let b = Parangle(o[oi] , o[(oi+1) ] , 2);
      if(  inte( a.p0 , a.p1 ,  b.p0 , b.p1  )  ){
        cps.push(  inte( a.p0 , a.p1 ,  b.p0 , b.p1 )  );
      }
 
   }
   cps = clearVert(cps);
 
   if(cps[0]){
     return new vector(lerp(cps[0].x,cps[1].x,0.5),lerp(cps[0].y,cps[1].y,0.5));
   }else{
     return new vector(lerp(x0,x1,0.5),lerp(y0,y1,0.5));
   }
    
}






function shapeCenter6(o){
 
    //let minDist=dist(o[0].x,o[0].y,o[1].x,o[1].y);
    //for(let i=0;i<o.length ;i+=1){
    //  if(minDist>dist(o[i].x,o[i].y,o[(i+1)%o.length].x,o[(i+1)%o.length].y) ){
    //    minDist = dist(o[i].x,o[i].y,o[(i+1)%o.length].x,o[(i+1)%o.length].y);
       
    //  }
    //}
    let minDist=dist(o[0].x,o[0].y,o[1].x,o[1].y)/5;
    let a=-getRadinas(o[0],o[1])-PI/2 ;
    let a1=-getRadinas(o[1],o[2])-PI/2;
    
    let p0 =new vector(o[0].x+sin(a)*minDist ,o[0].y+cos(a)*minDist );
    let a2=-getRadinas(o[0],p0)  ;
    let p1 =new vector(p0.x+sin(a2)*2 ,p0.y+cos(a2)*2 );
    
    let p2 =new vector(o[0].x+sin(a1)*minDist ,o[0].y+cos(a1)*minDist );
    let a3=-getRadinas(o[0],p2)  ;
    let p3 =new vector(p2.x+sin(a3)*2 ,p2.y+cos(a3)*2 );
    
    
    let l1= Parangle(p0,p1,100);
 
    let l2= Parangle(p2,p3,100);
 
    let centerpoint = inte(l1.p0,l1.p1,l2.p0,l2.p1);
 
    return centerpoint;
 
    
}
 

function shapeCenter7(o){
 
 
    let ppp =  smilBiger(o,-2 );
   
    return ppp[int(ppp.length/2)];
 
    
}

function shapeXYWH(o){
   let x0=o[0].x;
   let x1=o[0].x;
   let y0=o[0].y;
   let y1=o[0].y;
   for(let oi=0;oi<o.length;oi++){
    if(x0>o[oi].x){
      x0 = o[oi].x;
    }
    if(x1<o[oi].x){
      x1 = o[oi].x;
    }
    if(y0>o[oi].y){
      y0 = o[oi].y;
    }
    if(y1<o[oi].y){
      y1 = o[oi].y;
    }
    
     
   }
    
   return {x:x0,y:y0,w:x1-x0,h:y1-y0};
}
