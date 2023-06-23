 


function attachShape(obj) {
  let num1=0;
  for (let g=0; g<obj.length; g++) {
    let shape2 ;
    let n1, n2, n3 ;
    let bol = false;
    for (let s=0; s<obj[g].length-1; s++) {

      for (let b=0; b<obj.length; b++) {
        for (let n=0; n<obj[b].length-1; n++) {
          let l1 = new vec2(obj[g][s].x, obj[g][s].y, obj[g][s+1].x, obj[g][s+1].y);
          let l2 = new vec2(obj[b][n].x, obj[b][n].y, obj[b][n+1].x, obj[b][n+1].y);


          if (g!=b && l1.x1 == l2.x1 && l1.y1 == l2.y1 && l1.x2 == l2.x2 && l1.y2 == l2.y2 ) {
            bol = true;
            n1 = s;
            n2 = b;
            n3 = n;
            shape2=obj[b];
            break;
          }

          if (g!=b && l1.x1 == l2.x2 && l1.y1 == l2.y2 && l1.x2 == l2.x1 && l1.y2 == l2.y1 ) {
            bol = true;
            n1 = s;
            n2 = b;
            n3 = n;
            shape2=obj[b];
            break;
          }
        }
        if (bol==true) {
          break;
        }
      }
      if (bol==true) {
        break;
      }
    }





    if (bol == true) {


      let arr1= obj[g].slice(0, n1);

      let arr2= obj[g].slice(n1+1, obj[g].length+0);


      arr1 = concat(arr1, shape2.slice(n3+1, shape2.length-1 ));
      arr1 = concat(arr1, shape2.slice(0, n3   ));

      arr1 = concat(arr1, arr2);
      obj.cut( n2 );



      obj[g] = arr1;



      g--;
      num1++;
    }
  }
 
   obj = clearVert(obj); 
 
 
   for(let n=0;n<obj.length;n++){
     for(let m=0;m<obj[n].length-2;m++){
       let a1 = int(angle(obj[n][m].x,obj[n][m].y,obj[n][m+1].x,obj[n][m+1].y));
       let a2 = int(angle(obj[n][m+1].x,obj[n][m+1].y,obj[n][m+2].x,obj[n][m+2].y));
       if( (   a1 == fixTodeg(a2+180)) && (int(obj[n][m].x)==int(obj[n][m+2].x) || int(obj[n][m].y)==int(obj[n][m+2].y) )){
          obj[n].splice(m+1 ,0,obj[n][m+1]);
       }
   
     } 
   }
 
 
 
 
  let bol1=1;
  while(bol1> 0){
    bol1=0;
     
 
    for(let b=0;b<obj.length;b++){
      for(let a=0;a<obj[b].length-3 ;a++){ 
 
        if(  (int(obj[b][a  ].x)==int(obj[b][a+1].x) && int(obj[b][a  ].y)==int(obj[b][a+1].y))  ){
          obj[b].cut(a,a+1 );
          bol1++;
        }
    
      }
    }
 
  }


  obj = clearVert(obj); 

 
  
  for (let c=0; c<obj.length; c++) {
    if (int(obj[c][obj[c].length-1])!=int(obj[c][0])) {
      obj[c].push(obj[c][0]);
    }
  }

 
  return obj;
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



Array.prototype.sliceShape=function(v1,v2,v3,v4,f) {

  this.x1 = v1;
  this.y1 = v2;
  this.x2 = v3; 
  this.y2 = v4;
  
  let cpa =[]; // cute point array
  let bol1 =false; 
  let n1,n2,a1,a2,a3,a4;
  let dist1, numdist1, var1;
  for (let j=0;j<this.length; j++) { // this loop for check all shape if cuting line

   
    cpa =[];
    for (let i=0; i<this[j].length-1; i++) {
      let m1 = Parangle(this.x1,this.y1,this.x2,this.y2,0);
      let m2 = Parangle(limitFloat(this[j][i].x,3) ,  limitFloat(this[j][i].y,3) ,  limitFloat(this[j][i+1].x,3) ,  limitFloat(this[j][i+1].y,3) ,0);
      let a1 = angle(this.x1,this.y1,this.x2,this.y2);
      let a2 = angle(limitFloat(this[j][i].x,0) ,  limitFloat(this[j][i].y,0) ,  limitFloat(this[j][i+1].x,0) ,  limitFloat(this[j][i+1].y,0));
 
      if ( !( a1==a2  || a1==fixTodeg(a2+180) ) ) { 
        if (inte(m1,m2)) {
          cpa.push({l:{x1:this[j][i].x,y1:this[j][i].y,x2:this[j][i+1].x,y2:this[j][i+1].y},p:inte(m1,m2),idxline:function(a){return checkLinesObj(this.l,a);}});
        } 
      }
    }
 
 
 
 




 
    
    if (cpa.length>0) {
 
      n1 =checkLinesObj(cpa[0].l,this[j]);
      n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
     
      if ( cpa.length==1) {
        // if we have cpa = 1
        if (checkInsideObj(this.x1,this.y1,this[j]) ) {
          this[j].splice(n1+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
        } else {
          this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
        }
 
      } else {
 
   
        ///////////////// The first step is sorting   
        
        for(let sg=0;sg<cpa.length;sg++){
          dist1 =dist(cpa[sg].p.x,cpa[sg].p.y,this.x1,this.y1);
          numdist1=sg;
          for(let hg=sg;hg<cpa.length;hg++){
            if(int(dist1)>int(dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1))){
              dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1);
              numdist1=hg; 
            }
          }
          var1 = cpa.slice(numdist1,numdist1+1);
          cpa.cut(numdist1);
          cpa.splice(sg,0,var1[0]);      
        }  
        
        
        ///////////////// The secend step is sorting  x1 , y1  
        
         
        if (checkInsideObj(this.x1,this.y1,this[j])) {
          
          let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x1,this.y1);
          let numdist1=0;
          let numdist2=0;
 
          for(let hg=0;hg<cpa.length;hg++){  
             if(hg!=numdist1&&int(dist1)==int(dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1)) && cpa[numdist1].idxline(this[j]) < cpa[hg].idxline(this[j]) && cpa[hg].p.x==cpa[numdist1].p.x && cpa[hg].p.y==cpa[numdist1].p.y ){
               numdist2=hg;  
             }
          }
          
  
          n1 = checkLinesObj(cpa[numdist1].l,this[j]);    
          a1 = angle(obj[j][n1].x,obj[j][n1].y,obj[j][n1+1].x,obj[j][n1+1].y);
          a2 = angle(cpa[numdist1].p.x,cpa[numdist1].p.y,this.x1,this.y1);
           
          if (fixTodeg(a2-a1)<360 && fixTodeg(a2-a1)>=180) {
            //if(f){console.log("a1");}
            n1 = checkLinesObj(cpa[numdist1].l,this[j]);
            this[j].splice(n1+1, 0, cpa[numdist1].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[numdist1].p );
            cpa.cut(numdist1);
          }else{ 
            //if(f){console.log("a2");}
            n2 = checkLinesObj(cpa[numdist2].l,this[j]);       
            this[j].splice(n2+1,0,cpa[numdist2].p,{x:this.x1, y:this.y1},{x:this.x1, y:this.y1},cpa[numdist2].p );
            cpa.cut(numdist2);
          }          
          
        }
         
       
        ///////////////// The secend step is sorting  x2 , y2  
        
        if (checkInsideObj(this.x2,this.y2,this[j])) {
          
          let dist1 =dist(cpa[cpa.length-1].p.x,cpa[cpa.length-1].p.y,this.x2,this.y2);
          let numdist1=cpa.length-1;
          let numdist2=cpa.length-1;

          for(let hg=0;hg<cpa.length;hg++){
             if(hg!=numdist1&&int(dist1)==int(dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)) && cpa[numdist1].idxline(this[j]) > cpa[hg].idxline(this[j]) && cpa[hg].p.x==cpa[numdist1].p.x && cpa[hg].p.y==cpa[numdist1].p.y){
               numdist2=hg;  
             }
          }       
          
          n1 = checkLinesObj(cpa[numdist1].l,this[j]); 
          a1 = angle(obj[j][n1].x,obj[j][n1].y,obj[j][n1+1].x,obj[j][n1+1].y);
          a2 = angle(cpa[numdist1].p.x,cpa[numdist1].p.y,this.x2,this.y2);
          
          if (fixTodeg(a2-a1)<360 && fixTodeg(a2-a1)>=180) {
            //if(f){console.log("b1");}
            n1 =checkLinesObj(cpa[numdist1].l,this[j]);
            this[j].splice(n1+1 , 0, cpa[numdist1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[numdist1].p );
            cpa.cut(numdist1);
          }else{
            //if(f){console.log("b2");}
            n2 =checkLinesObj(cpa[numdist2].l,this[j]);
            this[j].splice(n2+1, 0, cpa[numdist2].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[numdist2].p );
            cpa.cut(numdist2);
          }

        }
        
 
        ///////////////// The treed step is sorting  
        
        if(cpa.length>3){    
          for(let sg=0;sg<cpa.length-1;sg++){
            if( !(cpa[sg].p.x==cpa[sg+1].p.x&&cpa[sg].p.y==cpa[sg+1].p.y) ){
            let a1 = angle(cpa[sg].l.x1,cpa[sg].l.y1,cpa[sg].l.x2 ,cpa[sg].l.y2);
            let a2 = angle(cpa[sg].p.x,cpa[sg].p.y,cpa[sg+1].p.x,cpa[sg+1].p.y);
                       
            let a3 = angle(cpa[sg+1].l.x1,cpa[sg+1].l.y1,cpa[sg+1].l.x2 ,cpa[sg+1].l.y2);
            let a4 = angle(cpa[sg+1].p.x,cpa[sg+1].p.y,cpa[sg].p.x,cpa[sg].p.y);
            let numlen = cpa.length ;
              if (  !( (fixTodeg(a2-a1)<360 && fixTodeg(a2-a1)>=180)  &&  (fixTodeg(a4-a3)<360 && fixTodeg(a4-a3)>=180)  )  ) {
                if( (cpa[(sg+1)%numlen].p.x==cpa[(sg+2)%numlen].p.x&&cpa[(sg+1)%numlen].p.y==cpa[(sg+2)%numlen].p.y) ){
                  cpa.displacement((sg+1)%numlen,(sg+2)%numlen);  
                }
              } 
            }
          }
        }


 
 
   }
          
          
 
          
 
      let nf2 = 0;
      if(cpa.length>1){ 
        let idxobj=0; 
        let nt1 =0;
        let nt2 =1; 
        let var6=0;
 
        for (let mn=0;mn< cpa.length ; mn+=2) {
          
          for(let jn=0;jn<this.length;jn++){
            if(checkLinesObj(cpa[mn].l,this[jn])||checkLinesObj(cpa[mn+1].l,this[jn])){
              idxobj=jn; 
            }
          }
          if(cpa[mn].idxline(this[idxobj])<cpa[mn+1].idxline(this[idxobj])){
            nt1 = mn;
            nt2 = mn+1;
          }else if(cpa[mn].idxline(this[idxobj])>cpa[mn+1].idxline(this[idxobj])){
            nt1 = mn+1;
            nt2 = mn;
          }
           
          let idx1,idx2 ;
          idx1 =checkLinesObj(cpa[nt1].l,this[idxobj]);
          idx2 =checkLinesObj(cpa[nt2].l,this[idxobj]);
          let shp = this[idxobj];
   
          // change the value first shape
          let shp1= shp.slice(0,idx1+1);
          shp1.push(cpa[nt1].p);
          shp1.push(cpa[nt2].p);
          shp1 = shp1.concat(shp.slice(idx2+1,this[idxobj].length ));
          this[idxobj] = shp1;
          
          // create and push the new shape
   
          let shp2= shp.slice(idx1+1 ,idx2+1 );
          shp2.unshift(cpa[nt1].p);
          shp2.push(cpa[nt2].p);
          this.splice(idxobj+1 ,0,shp2);
          
          // checking the close shapes         
          
          if(this[idxobj+1][0] != this[idxobj+1][this[idxobj+1].length-1]){
            this[idxobj+1].push(this[idxobj+1][0]);
          }
          if(this[idxobj][0] != this[idxobj][this[idxobj].length-1]){
            this[idxobj].push(this[idxobj][0]);
          }
          
          nf2++; 
 
        }
   
        j+=nf2;
        bol1=true;
      }
      
      
      
      
      
      
      
    }
    
 
    while(this[j][this[j].length-2] &&this[j][this[j].length-2].x==this[j][this[j].length-1].x&& this[j][this[j].length-2].y==this[j][this[j].length-1].y){
      this[j].cut(this[j].length-1);
    }
    
  }

  return bol1;
}








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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



 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function inte(boid1, boid2) {

  var x1 = boid1.x1, x2 = boid1.x2, x3 = boid2.x1, x4 = boid2.x2;
  var y1 = boid1.y1, y2 = boid1.y2, y3 = boid2.y1, y4 = boid2.y2;

  var dem = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  if (dem == 0 ) {
    return;
  }
  var ua_num = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
  var ub_num = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

  var ua = ua_num / dem;
  var ub = ub_num / dem;


  if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
    var x =  (x1 + ua * (x2 - x1));
    var y =  (y1 + ua * (y2 - y1)); 
    var v = {x:limitFloat(x,2), y:limitFloat(y, 2)};
    //var v = {x:x, y:y};
    return v;
  }

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////







function checkInsideObj(x,y,o) {
 
  this.bol1=false;
  this.bol2=false;
  this.bol3=false;
  this.bol4=false;
  this.x = x;
  this.y = y;
  this.objArrayCh =o;
  this.l1 =new vec2(this.x, this.y, -3 , this.y- 3 );
  this.l2 =new vec2(this.x, this.y, dm , this.y+ 3 );
  this.l3 =new vec2(this.x, this.y, this.x+ 3 ,-3 );
  this.l4 =new vec2(this.x, this.y, this.x- 3 , dm);
  
 
 
  for (let i=0; i<this.objArrayCh.length-1; i++) {
  
      this.l5=Parangle(this.objArrayCh[i].x,this.objArrayCh[i].y,this.objArrayCh[i+1].x,this.objArrayCh[i+1].y, 0);
      if (inte(this.l1, this.l5)&& this.bol1==false) {
        this.bol1 = true;
      }else if(inte(this.l1, this.l5)&& this.bol1==true){
        this.bol1 = false;
      }
      if (inte(this.l2, this.l5) && this.bol2==false) {
        this.bol2 = true;
      }else if(inte(this.l2, this.l5) && this.bol2==true){
        this.bol2 = false;
      }
      if (inte(this.l3, this.l5) && this.bol3==false) {
        this.bol3 = true;
      }else if(inte(this.l3, this.l5) && this.bol3==true){
        this.bol3 = false;
      }
      if (inte(this.l4, this.l5) && this.bol4==false) {
        this.bol4 = true;
      }else if(inte(this.l4, this.l5) && this.bol4==true){
        this.bol4 = false;
      }
  
  }
  
  return ( this.bol1 && this.bol2  && this.bol3 && this.bol4 );
}











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function scaleNum(v1,v2){
  return v1-(v1%v2);
}
 
 
 
 
function Smaller2D(v1,v2,v3){
 this.aArray=v3;
 this.bArray=[];
 for(let fcre=0;fcre<this.aArray.length;fcre++){
   this.conW = constrain(this.aArray[fcre].w-v2*2,v1,this.aArray[fcre].w-v2*2);
   this.conH = constrain(this.aArray[fcre].h-v2*2,v1,this.aArray[fcre].h-v2*2);
   this.bArray.push({x:this.aArray[fcre].x+(this.aArray[fcre].w-this.conW)/2,y:this.aArray[fcre].y+(this.aArray[fcre].h-this.conH)/2,w:this.conW,h:this.conH});
 }
 
  this.aArray.replace(this.bArray);
  return this.aArray;
  
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function clearVert(obj) {
  // this function clear beteewn to vert seam angle
  let sampleObj = [];
  for (let c=0; c<obj.length; c++) {
    let objVert = null;
    sampleObj.push(obj[c][0]);
     
    for (let a=0; a<obj[c].length-2; a++) {
  
      // this lines code copmare the angle value this index vert 0 , 1 with vert 0 ,2 
      let a1 = int(angle(int(obj[c][a].x), int(obj[c][a].y), int(obj[c][a+1].x), int(obj[c][a+1].y)));
      let a2 = int(angle(int(obj[c][a].x), int(obj[c][a].y), int(obj[c][a+2].x), int(obj[c][a+2].y)));
      
      if ( a1 == a2 ){
        
        objVert = obj[c][a+2];
        
      } else  {
        
        if (objVert){
          sampleObj.push(objVert);
        } else if (objVert==null){
          sampleObj.push(obj[c][a+1]);
        }
        
        objVert = obj[c][a+2];
        
      }
      if (a==obj[c].length-3) {
        sampleObj.push(obj[c][obj[c].length-1]);
      }
      
      
    }
   
   
   

    obj[c] = sampleObj;
    
    
  }
 
  return obj;
}








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







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 




Array.prototype.opEachElements = function(n) {

  for (let i=0; i<this.length; i++) {
    let ind = this[i].indexobj(0);
    this[i][ind]  +=n;
  }
}
 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////








Object.prototype.indexobj = function(n) {
  return Object.keys(this)[n];
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 

function difBetNums(v1,v2){
  if(abs(v1)>abs(v2)){
    this.v3 = abs(v1)-abs(v2);
  }else if(abs(v1)<abs(v2)){
    this.v3 = abs(v2)-abs(v1);
  }else {
    this.v3 = 0;
  }
  return this.v3;
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





function Parangle(p1x, p1y, p2x, p2y, n1) {
  this.n2 = -n1/distance(p1x, p1y, p2x, p2y)*1.4143;
  this.n3 = 2;
  return {x1 :limitFloat(lerp( p1x,p2x,this.n2),this.n3), y1 :limitFloat(lerp( p1y, p2y,this.n2),this.n3), x2  :limitFloat(lerp( p1x, p2x, 1-this.n2),this.n3), y2 :limitFloat(lerp( p1y, p2y, 1-this.n2),this.n3)};
  
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





function limitFloat(n, p) {
  return Math.floor(n*Math.pow(10, p))/Math.pow(10, p) ;
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




Array.prototype.cut=function() {
 
  let s, e ;
  if (arguments[1]) {
    s = arguments[0];
    e = arguments[1];
  } else {
    s = arguments[0];
    e = arguments[0];
  }
 
  this.replace(this.slice(0, s).concat(this.slice(e+1, this.length)));
 
}


 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////








Array.prototype.displacement=function(n1,n2){
  this.var1 = this.slice(n1,n1+1);
  this.cut(n1);
  this.splice(n2,0,this.var1[0]);
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





Array.prototype.clear=function() {
  while (this.length>0) {
    this.pop();
  }
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




Array.prototype.replace=function(a) {
  while (this.length>0) {
    this.pop();
  }
  for (let i of a) {
    this.push(i);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



Array.prototype.shuffle=function(){
  
  this.Arrlen = this.length;
  this.randIdx=0;
  while(this.Arrlen>0){
    this.randIdx = int(Math.random() * this.Arrlen);
    this.Arrlen--;
    [this[this.Arrlen], this[this.randIdx]] = [this[this.randIdx], this[this.Arrlen]];
  }

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




Array.prototype.attach=function() {
  this.conArray=[];
  for (let ic=0; ic<arguments.length; ic++) {
    for (let ib=0; ib<arguments[ic].length; ib++) {
      this.conArray.push(arguments[ic][ib]);
    }
  }
  while (this.length>0) {
    this.pop();
  }
  for (let i of this.conArray) {
    this.push(i);
  }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function vec() {

  if (arguments.length==2) {
    this.x=arguments[0];
    this.y=arguments[1];
  } else if (arguments.length==3) {
    this.x=arguments[0];
    this.y=arguments[1];
    this.z=arguments[2];
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





function removeDupElements(a) {
  let arr = a;
  for (let ui = 0; ui<arr.length; ui++) {
    for (let hi = 0; hi<arr.length; hi++) {
      if (ui!=hi && arr[ui] == arr[hi]  ) {
        arr =  cutarr(arr, hi);
      }
    }
  }

  return arr ;
}







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function distance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;
  return Math.sqrt(x * x + y * y);
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////








function checkArrayOrder(a){
  let upToDown=0;
  let downToUp=0;
  
  for(let b=0; b < a.length-1;b++){
    if(a[b]>a[b+1]){
      upToDown++;
    }else if(a[b]<a[b+1]){
      downToUp++;
    }
  }
  
  let returnvalue;
  if(upToDown>downToUp){
    returnvalue = "upToDown";
  }else if(downToUp>upToDown){
    returnvalue = "downToUp";
  }else if(upToDown==downToUp){
    
  }
 
  return returnvalue;
  
}










/////////////////////////////////////////////////////////////////////////////////////////////















function shufArray(v1, v2) {
  let lisnum = [v1];
  let bol = false;
  let num3 = 0;

  while (lisnum.length < v2) {
    bol = false ;
    while (bol  == false) {

      bol = false ;
      num3 = int(random(v1, v2));

      for (let a =0; a < lisnum.length; a++) {
        if (num3 == lisnum[a]) {
          bol = false;
          break ;
        } else {
          bol = true;
        }
      }
      if (bol  == true) {
        append(lisnum, num3);
      }
    }
  }
  return lisnum ;
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////













function dupElements(a) {
  let arr = a;
  let truefal3=true;
  let truefal4=true;
  for (let ui = 0; ui<arr.length; ui++) {
    for (let hi = 0; hi<arr.length; hi++) {

      if (ui!=hi ) {

        if ( arr[ui].y == arr[hi].y) {
          truefal3=true;
        } else {
          truefal3=false;
          break;
        }
      }
      if ( truefal3==false) {
        break;
      }
    }
  }

  for (let ui = 0; ui<arr.length; ui++) {
    for (let hi = 0; hi<arr.length; hi++) {

      if (ui!=hi ) {

        if ( arr[ui].y == arr[hi].y) {
          truefal4=true;
        } else {
          truefal4=false;
          break;
        }
      }
      if ( truefal4==false) {
        break;
      }
    }
  }

  if ( truefal3 == false && truefal4 == false) {
    return false ;
  } else {
    return true ;
  }

  //return truefal3 ;
}










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////








function randomlist() {
  let lis =[];
  for (let f = 0; f<arguments.length; f++) {
    lis.push(arguments[f]);
  }

  return Math.random(lis);
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












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
