




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




function comp_style1(ww1, hh1, ww2, hh2, dw, dh) {

  
  this.dw = (dw);
  this.dh = (dh);
  this.x =0;
  this.y =0;
  this.w =0;
  this.h =0;
  this.s = 10 ;
  this.area = this.dw*this.dh;
  this.fillArea =0;
  this.funcBol=true;
  this.objArray=[];
  while (this.fillArea <  this.area  ) {

    if (this.fillArea < int(this.area/2)) {
      w1 = ww1;
      w2 = ww2;
      h1 = hh1;
      h2 = hh2;
    } else {
      w1 = 1;
      w2 = int(ww2)/2;
      h1 = 1;
      h2 = int(hh2)/2;
    }

    this.funcBol = true;

    if ( this.objArray.length > 0) {

      while (this.funcBol) {

        this.x =  int(random( this.dw/this.s))*this.s;
        this.y =  int(random( this.dh/this.s))*this.s;
        this.w =  int(random(w1, w2) )*this.s;
        this.h =  int(random(h1, h2) )*this.s;

        while ( this.x+ this.w > this.dw  ) {
          this.x =  int(random(this.dw/this.s))*this.s;
          this.w =  int(random(w1, w2) )*this.s;
        }



        while (  this.y+ this.h > this.dh ) {
          this.y =  int(random( this.dh/this.s))*this.s;
          this.h =  int(random(h1, h2))*this.s;
        }




        for ( let j  of this.objArray  ) {
          if ( this.x+this.w >  j.x   &&   this.x <  j.x + j.w  && this.y+this.h  >  j.y   &&   this.y <  j.y + j.h   ) {
            this.funcBol = true ;
            break ;
          } else {
            this.funcBol = false ;
          }
        }
      }
    } else {

      this.x = int(random( this.dw/this.s ))*this.s;
      this.y = int(random( this.dh/this.s ))*this.s;
      this.w = int(random(w1, w2) )*this.s  ;
      this.h = int(random(h1, h2) )*this.s;



      while ( this.x+ this.w >  this.dw  ) {
        this.x = int(random( this.dw/this.s ))*this.s;
        this.w = int(random(w1, w2) )*this.s ;
      }



      while (  this.y+ this.h > this.dh  ) {
        this.y = int(random( this.dh/this.s ))*this.s;
        this.h = int(random(h1, h2) )*this.s;
      }
    }


    this.objArray.push( {x:this.x, y:this.y, w:this.w, h:this.h});
    this.fillArea += this.w*this.h;
  }


  this.obj2 =[];


  for (let b=0; b<this.objArray.length; b++) {
    this.obj2.push( {x:this.objArray[b].x+this.dw, y:this.objArray[b].y, w:this.objArray[b].w, h:this.objArray[b].h});
  }
  for (let b=0; b<this.objArray.length; b++) {
    this.obj2.push( {x:this.objArray[b].x, y:this.objArray[b].y+this.dh, w:this.objArray[b].w, h:this.objArray[b].h});
  }
  for (let b=0; b<this.objArray.length; b++) {
    this.obj2.push( {x:this.objArray[b].x+this.dw, y:this.objArray[b].y+this.dh, w:this.objArray[b].w, h:this.objArray[b].h});
  }
 
  this.objArray = this.objArray.concat(this.obj2);
  return this.objArray;
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function comp_style2 (x,y,w,h,v1) {
  this.objArray =[];
  this.objArray.push({x:x,y:y,w:w,h:h}); 
  this.limtnum = 4;
  for (let i=0; i<v1; i++) {
    let numforobj=this.objArray.length;
    for (let j=0; j<numforobj; j++) {
      let rand1= random(0, 10);
      let rand2= random(0, 10);
      let obj1 = {x:this.objArray[j].x, y:this.objArray[j].y, w:this.objArray[j].w, h:this.objArray[j].h};
      if (rand1 < 5 && this.objArray[j].w >this.limtnum && this.objArray[j].h >this.limtnum ) {
        this.objArray[j] = {x:this.objArray[j].x, y:this.objArray[j].y, w:int(constrain(obj1.w/rand2, this.limtnum, obj1.w-this.limtnum)), h:this.objArray[j].h};
        this.objArray.push( {x:obj1.x+this.objArray[j].w, y:this.objArray[j].y, w:int(obj1.w- this.objArray[j].w), h:this.objArray[j].h});
      } else if (rand1 > 5 && this.objArray[j].w >this.limtnum && this.objArray[j].h >this.limtnum ) {
        this.objArray[j] = {x:this.objArray[j].x, y:this.objArray[j].y, w:this.objArray[j].w, h:int(constrain(obj1.h/rand2, this.limtnum, obj1.h-this.limtnum))};
        this.objArray.push( {x:obj1.x, y:this.objArray[j].y+this.objArray[j].h, w:this.objArray[j].w, h:int(obj1.h-this.objArray[j].h)});
      }
      
    }
 
  }

 return this.objArray;
}








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////










function comp_style3(x, y, w, h) {
  let boids = [];
  let all_boids = [];
  var b1 = new Boid();
  var b2 = new Boid();
  var b3 = new Boid();
  var b4 = new Boid();

  b1.dead = b2.dead = b3.dead = b4.dead = true;

  b1.set(x, y, x+w, y);
  b2.set(x+w, y, x+w, y+h);
  b3.set(x+w, y+h, x, y+h);
  b4.set(x, y+h, x, y);

  all_boids.push(b1);
  all_boids.push(b2);
  all_boids.push(b3);
  all_boids.push(b4);

  var b = new Boid(w/2, h/2, Math.random() * 2 * Math.PI);
  boids.push(b);
  all_boids.push(b);

  for (let q=0; q<10000; q++) {
    for (i = 0; i < boids.length; i++) {
      var p = boids[i];
      p.update(all_boids, boids);
      if (!p.dead  && boids.length <10) {
        var child = new Boid(p.x2, p.y2, p.angle +  PI * ( random() > 0.5 ? 0.5 : -0.5)) ;
        child.parent = p;
        boids.push(child);
        all_boids.push(child);
      }
    }
  }

  return all_boids;
}


class Boid {

  constructor(x, y, angle) {

    this.x1 = x ;
    this.y1 = y ;
    this.x2 = x ;
    this.y2 = y ;

    this.angle =  pow(random(), 30)+ angle;

    this.dx =  cos(this.angle);
    this.dy =  sin(this.angle);

    this.d = 0;
    this.dead = false;
  }



  update(all_boids, boids) {


    this.d  +=3 ;
    this.x2  = this.x1 + this.d  * this.dx;
    this.y2  = this.y1 + this.d  * this.dy;


    var deathPoint;


    for (let b of all_boids) {

      if (this.dead) {
        break;
      }
      if (b == this) {
        break;
      }

      var its = inte(this,b);

      // if its is true run this code
      if (its) {

        if (b.parent && b.parent == this) {
          break;
        } else if (this.parent && this.parent == b) {
          break;
        } else if (b.collides && b.collides == this) {
          break;
        } else {
          this.collides = b;
          this.kill(boids);

          deathPoint = its;
        }
      }
    }





    if (this.dead) {
      this.x2 = deathPoint.x;
      this.y2 = deathPoint.y;
    }
  }


  kill(boids) {

    boids.cut(boids.indexOf(this) );
    this.dead = true;
  }



  set(x1, y1, x2, y2) {
    this.x1 = x1 ;
    this.y1 = y1 ;
    this.x2 = x2 ;
    this.y2 = y2 ;
  }
}







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function comp_style4(x, y, w, h){
  
  
  
}










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















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



  //  for(let g=0;g<obj.length;g++){

  //    let n4 =[];
  //    let bol1=false;
  //    for(let f=0;f<obj[g].length-1;f++){
  //      for(let v=0;v<obj[g].length-1;v++){
  //        if(f!=v && obj[g][f].x == obj[g][v+1].x&& obj[g][f].y == obj[g][v+1].y&& obj[g][f+1].x == obj[g][v].x && obj[g][f+1].y == obj[g][v].y){
  //          n4.push(f+1);
  //        }
  //        else if(f!=v && obj[g][f].x == obj[g][v].x&& obj[g][f].y == obj[g][v].y&& obj[g][f+1].x == obj[g][v+1].x && obj[g][f+1].y == obj[g][v+1].y){
  //          n4.push(v+1);
  //        }
  //      }
  //    }
  //    console.log(n4);
  //    if(n4.length>0){

  //    obj[g] = cutarr(obj[g],n4[0],n4[n4.length-1] );

  //    }
  //  }





  for (let c=0; c<obj.length; c++) {
    if (obj[c][obj[c].length-1]!=obj[c][0]) {
      obj[c].push(obj[c][0]);
    }
  }





  obj = clearVert(obj);



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
           if(f){console.log(0);}
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
        
        
        ///////////////// The secend step is sorting    
        
        if (checkInsideObj(this.x1,this.y1,this[j])) {
          let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x1,this.y1);
          let numdist1=0;
          let numdist2=0;
 
          for(let hg=0;hg<cpa.length;hg++){  
              
             if(hg!=numdist1&&int(dist1)==int(dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1)) && cpa[numdist1].idxline(this[j]) > cpa[hg].idxline(this[j]) && cpa[hg].p.x==cpa[numdist1].p.x && cpa[hg].p.y==cpa[numdist1].p.y ){
               numdist2=hg;  
             }
          }
          
  
          n1 = checkLinesObj(cpa[numdist1].l,this[j]);    
          
          a1 = angle(obj[j][n1].x,obj[j][n1].y,obj[j][n1+1].x,obj[j][n1+1].y);
 
          a2 = angle(cpa[numdist1].p.x,cpa[numdist1].p.y,this.x1,this.y1);
           
          if (fixTodeg(a2-a1)<360 && fixTodeg(a2-a1)>=180) {
           if(f){console.log("a1");}
            n1 = checkLinesObj(cpa[numdist1].l,this[j]);
            this[j].splice(n1+1, 0, cpa[numdist1].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[numdist1].p );
            cpa.cut(numdist1);
          }else{ 
            if(f){console.log("a2");}
            n2 = checkLinesObj(cpa[numdist2].l,this[j]);       
            this[j].splice(n2+1,0,cpa[numdist2].p,{x:this.x1, y:this.y1},{x:this.x1, y:this.y1},cpa[numdist2].p );
            cpa.cut(numdist2);
          }          
        }
         
       
      
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
            if(f){console.log("b1");}
            n1 =checkLinesObj(cpa[numdist1].l,this[j]);
            this[j].splice(n1+1 , 0, cpa[numdist1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[numdist1].p );
            cpa.cut(numdist1);
          }else{
            if(f){console.log("b2");}
            n2 =checkLinesObj(cpa[numdist2].l,this[j]);
            this[j].splice(n2+1, 0, cpa[numdist2].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[numdist2].p );
            cpa.cut(numdist2);
          }

        }
        
       
 
        
 
            
              //for(let sg=0;sg<cpa.length;sg++){
              //dist1 =dist(cpa[sg].p.x,cpa[sg].p.y,this.x1,this.y1);
              //numdist1=sg;
              //for(let hg=sg;hg<cpa.length;hg++){
              //  if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1)){
              //   dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1);
              //   numdist1=hg; 
              //  }
              //}
              //var1 = cpa.slice(numdist1,numdist1+1);
              //cpa.cut(numdist1);
              //cpa.splice(sg,0,var1[0]);
              
              //}
            
 
            if(cpa.length>3){
             
              
              //for(let sg=0;sg<cpa.length-1;sg++){
              //   if( !(cpa[sg].p.x==cpa[sg+1].p.x&&cpa[sg].p.y==cpa[sg+1].p.y) ){
              //     let a1 = angle(cpa[sg].l.x1,cpa[sg].l.y1,cpa[sg].l.x2 ,cpa[sg].l.y2);
              //     let a2 = angle(cpa[sg+1].p.x,cpa[sg+1].p.y,cpa[sg].p.x,cpa[sg].p.y);
                   
              //     let a3 = angle(cpa[sg+1].l.x1,cpa[sg+1].l.y1,cpa[sg+1].l.x2 ,cpa[sg+1].l.y2);
              //     let a4 = angle(cpa[sg+1].p.x,cpa[sg+1].p.y,cpa[sg].p.x,cpa[sg].p.y);
              //     let numlen = cpa.length ;
              //     if ( !( (fixTodeg(a2-a1)<360 && fixTodeg(a2-a1)>=180)  &&  (fixTodeg(a4-a3)<360 && fixTodeg(a4-a3)>=180)  )  ) {
              //       if( (cpa[(sg+1)%numlen].p.x==cpa[(sg+2)%numlen].p.x&&cpa[(sg+1)%numlen].p.y==cpa[(sg+2)%numlen].p.y) ){
              //         cpa.displacement((sg+1)%numlen,(sg+2)%numlen);
              //       }
              //     } 
              //   }
              // }
               
  
                
              
              
              
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
    //var v = {x:limitFloat(x, 4), y:limitFloat(y, 4)};
    var v = {x:x, y:y};
    return v;
  }

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////







function checkInsideObj(x, y, a) {
 
  this.bol1=false;
  this.bol2=false;
  this.bol3=false;
  this.bol4=false;
  this.x = x;
  this.y = y;
  this.l1 =new vec2(this.x, this.y, -2 , this.y- 2 );
  this.l2 =new vec2(this.x, this.y, 2000, this.y+ 2 );
  this.l3 =new vec2(this.x, this.y, this.x+ 2 ,-2 );
  this.l4 =new vec2(this.x, this.y, this.x- 2 , 2000);
  
 
  
  for (let i=0; i<a.length-1; i++) {
  
      this.l5=Parangle(a[i].x, a[i].y, a[i+1].x, a[i+1].y, 0);
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











function checkLinesObj(){
  if(arguments.length==5){
    this.x1=arguments[0];
    this.y1=arguments[1];
    this.x2=arguments[2];
    this.y2=arguments[3];
    this.obj=arguments[4];
    
  }else if(arguments.length==2){
    this.x1=arguments[0].x1;
    this.y1=arguments[0].y1;
    this.x2=arguments[0].x2;
    this.y2=arguments[0].y2;
    this.obj=arguments[1];
  }
  let idxnum ;
  for(let ib=0;ib<this.obj.length-1;ib++){
    if(this.obj[ib].x==this.x1&&this.obj[ib].y==this.y1&&this.obj[ib+1].x==this.x2&&this.obj[ib+1].y==this.y2){
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





function Parangle(x1, y1, x2, y2, n1) {
  let n2 = -n1/distance(x1, y1, x2, y2)*1.4143;
  let n3 = 2;
  return {x1 :limitFloat(lerp( x1, x2, n2), n3), y1 :limitFloat(lerp( y1, y2, n2),n3), x2  :limitFloat(lerp( x1, x2, 1-n2), n3), y2 :limitFloat(lerp( y1, y2, 1-n2), n3)};
  
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





function clearVert(obj) {

  let sampleObj = [];
  for (let c=0; c<obj.length; c++) {
    let startVert = obj[c][0];
    let endVert   = obj[c][1];

    for (let a=0; a<obj[c].length-2; a++) {


      let a1 = int(angle(obj[c][a].x, obj[c][a].y, obj[c][a+1].x, obj[c][a+1].y)) ;
      let a2 = int(angle(obj[c][a].x, obj[c][a].y, obj[c][a+2].x, obj[c][a+2].y)) ;
      if ( a1 == a2 || a1 == a2-180 || a1 == a2+180   ) {
        endVert = obj[c][a+2];
      } else if ( !(a1 == a2 || a1 == a2-180 || a1 == a2+180) ) {
        if (endVert!=null) {
          sampleObj.push(endVert);
        }
        startVert = obj[c][a+1];
        endVert = obj[c][a+2];
      }
      if (a==obj[c].length-3) {

        sampleObj.push(obj[c][obj[c].length-1]);
      } else if (a==0) {
        sampleObj.push(obj[c][0]);
      }
    }


    obj[c] = sampleObj;
  }

  return obj;
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


//Object.prototype.fixToDeg =function(n){
  
//  this = this%360; 
//}






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








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function cshape(x, y, w, h, r) {
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.num1=0.1;
  this.num2=0;
  this.num3=0;
  this.num4=0;
  this.num5=0;
  push();
  translate( this.w/2, this.h/2);



  this.r = constrain(r, 0, 10)/10;
  if ( this.w  < this.h) {
    this.num4 = this.w ;
  } else {
    this.num4 = this.h;
  }
  this.num5 = ((this.num4 /2)/10)*this.r;


  for (let i=0; i< HALF_PI; i+=this.num1) {
    this.num2 += sin(i)*this.num5 ;
    this.num3 += cos(i)*this.num5 ;
  }


  beginShape();
  for (let i=0; i< HALF_PI; i+=this.num1) {
    this.y += sin(i)*this.num5 ;
    this.x += cos(i)*this.num5 ;
    vertex(this.x+(this.w/2)-this.num2*1.07, this.y-(this.h/2) );
  }
  for (let i=HALF_PI; i< HALF_PI*2; i+=this.num1) {
    this.y += sin(i)*this.num5 ;
    this.x += cos(i)*this.num5 ;
    vertex(this.x+(this.w/2)-this.num2*1.07, this.y+(this.h/2)-this.num3*1.93 );
  }
  for (let i=HALF_PI*2; i< HALF_PI*3; i+=this.num1) {
    this.y += sin(i)*this.num5;
    this.x += cos(i)*this.num5 ;
    vertex(this.x-(this.w/2)+this.num2, this.y+(this.h/2)-this.num3*1.93 );
  }
  for (let i=HALF_PI*3; i< HALF_PI*4; i+=this.num1) {
    this.y += sin(i)*this.num5 ;
    this.x += cos(i)*this.num5 ;
    vertex(this.x-(this.w/2)+this.num2, this.y-(this.h/2) );
  }


  endShape(CLOSE);
  pop();
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function cpolygon(x, y, radius, np) {
  let angle = TWO_PI / np ;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius ;
    let sy = y + sin(a) * radius ;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function cstar(x, y, radius1, radius2, np) {
  let angle = TWO_PI / np ;
  let halfAngle = angle / 2  ;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2 ;
    let sy = y + sin(a) * radius2 ;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1 ;
    sy = y + sin(a + halfAngle) * radius1 ;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////










function cline(x, y, x2, y2) {

  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;

  let num2 = abs( x2 - x ) ;
  let num3 = abs( y2 - y ) ;
  let num4 = 0 ;
  let num5 = 0 ;
  let fornum = 0 ;
  if (num2>num3) {
    fornum =num2;
    if (y2 - y >0) {
      num5 = num3/num2;
    } else {
      num5 = (num3/num2 )*-1;
    }
    if (x2 - x >0) {
      num4 = 1;
    } else if (x2 - x == 0) {
      num4 = 0;
    } else if (x2 - x < 0) {
      num4 = -1;
    }
  } else {
    fornum =num3;
    if (x2 - x >0) {
      num4 = num2/num3;
    } else {
      num4 = (num2/num3 )*-1;
    }
    if (y2 - y >0) {
      num5 = 1;
    } else if (y2 - y == 0) {
      num5 = 0;
    } else if (y2 - y < 0) {
      num5 = -1;
    }
  }

  if (num4 == Infinity) {
    num4 =0;
  }

  if (num5 == 0 && y2 - y >0) {
    num5 =  1;
  } else if (num5 == 0 && y2 - y <0) {
    num5 = -1;
  } else if (num5 == -Infinity  ) {
    num5 = -1;
  } else if (  num5 ==  Infinity) {
    num5 =  1;
  }



  beginShape();
  for (let a=-1; a <=   abs(fornum) +1; a+=1) {
    curveVertex(this.x+num4*a, this.y+ num5*a  );
  }
  endShape();
}








/////////////////////////////////////////////////////////////////////////////////////////////
















     
    //if(cpa.length>1){
      
       
     
    //  // this line code to check reorder the cpa elements with x1 , y1
    //  if (checkInsideObj(this.x1,this.y1,this[j])) {
           
    //      let dist1, numdist1, var1;
    //      for(let sg=0;sg<cpa.length;sg++){
    //        dist1 =dist(cpa[sg].p.x,cpa[sg].p.y,this.x1,this.y1);
    //        numdist1=sg;
    //        for(let hg=sg;hg<cpa.length;hg++){
    //          if(sg!=hg&&dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1)){
    //            dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1);
    //            numdist1=hg;
    //          }
    //        }
    //        var1 = cpa.slice(numdist1,numdist1+1);
    //        cpa.cut(numdist1);
    //        cpa.splice(sg,0,var1[0]);
            
    //      }
          
     

    //    if(f){cpa.forEach(s=>{console.log(checkLinesObj(s.l,this[j]));});} 
   
         
      
    //  }
      
      
      
      
      

      
      
    //  // this line code to check reorder the cpa elements with x2 , y2 
    //  if (checkInsideObj(this.x2,this.y2,this[j])) {
 
          
    //      let dist1, numdist1, var1;
    //      for(let sg=0;sg<cpa.length;sg++){
    //        dist1 =dist(cpa[sg].p.x,cpa[sg].p.y,this.x2,this.y2);
    //        numdist1=sg;
    //        for(let hg=sg;hg<cpa.length;hg++){
    //          if(sg!=hg&&dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
    //            dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
    //            numdist1=hg;
    //          }
    //        }
    //        var1 = cpa.slice(numdist1,numdist1+1);
    //        cpa.cut(numdist1);
    //        cpa.splice(sg,0,var1[0]);
            
    //      }
          
          
    //      if (!checkInsideObj(this.x1,this.y1,this[j])){
    //        cpa.reverse();
    //      }
    //     if(cpa[0].idxline(this[j])<cpa[1].idxline(this[j])){
    //       for(let m=0;m<cpa.length-1;m++){
    //         if( cpa[m].p.x==cpa[m+1].p.x&&cpa[m].p.y==cpa[m+1].p.y&&checkLinesObj(cpa[m].l,this[j])>checkLinesObj(cpa[m+1].l,this[j]) ){
     
    //            var1 = cpa.slice(m,m+1);
    //            cpa.cut(m);
    //            cpa.splice(m+1,0,var1[0]);  
    //         }
    
    //       }
    //     }else if(cpa[0].idxline(this[j])>cpa[1].idxline(this[j])){
    //       for(let m=0;m<cpa.length-1;m++){
    //         if( cpa[m].p.x==cpa[m+1].p.x&&cpa[m].p.y==cpa[m+1].p.y&&checkLinesObj(cpa[m].l,this[j])<checkLinesObj(cpa[m+1].l,this[j]) ){
     
    //            var1 = cpa.slice(m,m+1);
    //            cpa.cut(m);
    //            cpa.splice(m+1,0,var1[0]);  
    //         }
    
    //       }
    //     }
         
         
         
         
         
         
         
        
       
       
    //  }
      
      
      
 
    //}
 
 
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //        if(f){
    // line(cpa[3].l.x1,cpa[3].l.y1,cpa[3].l.x2,cpa[3].l.y2);
    // cpa.forEach(s=>{console.log(s.idxline(this[j]));});
   
    //} 













































//function fuondnumline(a1,a2){
//  let num1=checkLinesObj(a1[0].l,a2);
//  let num2 ;
//  for(let hg=0;hg<a1.length;hg++){
//    if(num1>checkLinesObj(a1[hg].l,a2)){
//      num1=checkLinesObj(a1[hg].l,a2);
//      num2 = hg;
//    }
//  }
//  return num1;
//}















//Array.prototype.sliceShape=function(v1,v2,v3,v4,f) {

//  this.x1 = v1;
//  this.y1 = v2;
//  this.x2 = v3;
//  this.y2 = v4;
  
//  let cpa =[]; // cute point array
//  let bol1 =false;
//  let n1,n2,a1,a2;
//  for (let j=0;j<this.length; j++) { // this loop for check all shape if cuting line
 
   
//    cpa =[];
//    for (let i=0; i<this[j].length-1; i++) {
//      let m1 = Parangle(this.x1,this.y1,this.x2,this.y2, 1.5 );
//      let m2 = Parangle(limitFloat(this[j][i].x, 1), limitFloat(this[j][i].y, 1), limitFloat(this[j][i+1].x, 1), limitFloat(this[j][i+1].y, 1), -1);
 
//      let a1 = angle(this.x1,this.y1,this.x2,this.y2);
//      let a2 = angle(this[j][i].x, this[j][i].y, this[j][i+1].x, this[j][i+1].y);
 
//      if ( !( a1==a2 || a1==a2-180 || a1==a2+180 ) ) {
//        if (inte(m1,m2)) {
//          cpa.push({l:{x1:this[j][i].x,y1:this[j][i].y,x2:this[j][i+1].x,y2:this[j][i+1].y}, p:inte(m1,m2)});
           
//        }
//      }
//    }
 
//  //if(f){cpa.forEach(s=>{console.log(checkLinesObj(s.l,this[j]));});} 
    
 
    
    
//    if(cpa.length>2){
      
 
//      // this line code to check reorder the cpa elements with x1 , y1
//      if (checkInsideObj(this.x1,this.y1,this[j])) {
           
//          let dist1, numdist1, var1;
//          for(let sg=0;sg<cpa.length;sg++){
//            dist1 =dist(cpa[sg].p.x,cpa[sg].p.y,this.x1,this.y1);
//            numdist1=sg;
//            for(let hg=sg;hg<cpa.length;hg++){
//              if(sg!=hg&&dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1)){
//                dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1);
//                numdist1=hg;
//              }
//            }
//            var1 = cpa.slice(numdist1,numdist1+1);
//            cpa.cut(numdist1);
//            cpa.splice(sg,0,var1[0]);
            
//          }
          
//        //  cpa.reverse();
                
//        //  if( cpa[cpa.length-2].p.x==cpa[cpa.length-1].p.x&&cpa[cpa.length-2].p.y==cpa[cpa.length-1].p.y&&checkLinesObj(cpa[cpa.length-2].l,this[j])<checkLinesObj(cpa[cpa.length-1].l,this[j]) ){
 
//        //  var1 = cpa.slice(cpa.length-2,cpa.length-1);
//        //  cpa.cut(cpa.length-2);
//        //  cpa.push(var1[0]);  
//        //}
             
                
                
                
                
                
                
//        //let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x2,this.y2);
//        //let numdist1=0; 
//        //let numdist2 ;
//        //let var1 ;
//        //for(let hg=0;hg<cpa.length;hg++){
//        //  if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
//        //    dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
//        //    numdist1=hg;
//        //  }
//        //}
        
         
        
        
//        //let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x2,this.y2);
//        //let numdist1=0; 
//        //let numdist2 ;
//        //let var1 ;
//        //for(let hg=0;hg<cpa.length;hg++){
//        //  if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
//        //    dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
//        //    numdist1=hg;
//        //  }
//        //}
        
          
          
  
          
          
          
//        //  for(let m=0;m<cpa.length;m++){
//        //     if(m!=numdist1&&cpa[numdist1].p.x==cpa[m].p.x&&cpa[numdist1].p.y==cpa[m].p.y&&checkLinesObj(cpa[numdist1].l,this[j])<checkLinesObj(cpa[m].l,this[j]) ){
//        //       numdist1=m;
//        //     }
//        //  }
          
//        //  var1 = cpa.slice(numdist1,numdist1+1);
//        //  cpa.cut(numdist1);
//        //  cpa.unshift(var1[0]);
          
//        //  if( cpa[0].p.x==cpa[1].p.x&&cpa[0].p.y==cpa[1].p.y&&checkLinesObj(cpa[0].l,this[j])<checkLinesObj(cpa[1].l,this[j]) ){
//        //   var1 = cpa.slice(1,2);
//        //   cpa.cut(1);
//        //   cpa.unshift(var1[0]);  
//        //  }
        
          
    
    
        
        
//          //if(f){cpa.forEach(s=>{console.log(checkLinesObj(s.l,this[j]));});} 

        
        
      
//      }
      
      
      
      
      

      
      
//      // this line code to check reorder the cpa elements with x2 , y2 
//      if (checkInsideObj(this.x2,this.y2,this[j])) {
        
        
        
//        //let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x2,this.y2);
//        //let numdist1=0; 
//        //let numdist2 ;
//        //let var1 ;
//        //for(let hg=0;hg<cpa.length;hg++){
//        //  if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
//        //    dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
//        //    numdist1=hg;
//        //  }
//        //}
        
        
//        //for(let m=0;m<cpa.length;m++){
//        //   if(m!=numdist1&&cpa[numdist1].p.x==cpa[m].p.x&&cpa[numdist1].p.y==cpa[m].p.y&&checkLinesObj(cpa[numdist1].l,this[j])>checkLinesObj(cpa[m].l,this[j]) ){
//        //     numdist1=m;
//        //   }
//        //}
        
//        //var1 = cpa.slice(numdist1,numdist1+1);
//        //cpa.cut(numdist1);
//        //cpa.push(var1[0]);  
        
        
        
        
       
       
//          let dist1, numdist1, var1;
//          for(let sg=0;sg<cpa.length;sg++){
//            dist1 =dist(cpa[sg].p.x,cpa[sg].p.y,this.x2,this.y2);
//            numdist1=sg;
//            for(let hg=sg;hg<cpa.length;hg++){
//              if(sg!=hg&&dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
//                dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
//                numdist1=hg;
//              }
//            }
//            var1 = cpa.slice(numdist1,numdist1+1);
//            cpa.cut(numdist1);
//            cpa.splice(sg,0,var1[0]);
            
//          }
//           cpa.reverse();
           
//         //console.log(checkLinesObj(cpa[cpa.length-2].l,this[j]),checkLinesObj(cpa[cpa.length-1].l,this[j]));
//        if( cpa[cpa.length-2].p.x==cpa[cpa.length-1].p.x&&cpa[cpa.length-2].p.y==cpa[cpa.length-1].p.y&&checkLinesObj(cpa[cpa.length-2].l,this[j])<checkLinesObj(cpa[cpa.length-1].l,this[j]) ){
 
//          var1 = cpa.slice(cpa.length-2,cpa.length-1);
//          cpa.cut(cpa.length-2);
//          cpa.push(var1[0]);  
//        }
       
        
//       if(f){cpa.forEach(s=>{console.log(checkLinesObj(s.l,this[j]));});} 
       
       
       
       
       
       
//      }
 
//    }
 
 
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    if (cpa.length>0) {
      
      
      
      
      
      
//      n1 =checkLinesObj(cpa[0].l,this[j]);
//      n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
     
//      if ( cpa.length==1) {
//        // this is working ////
//        if (checkInsideObj(this.x1,this.y1,this[j]) ) {
//          this[j].splice(n1+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
//        } else {
//          this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
//        }
 
//      } else {
      
 
        
//        if (checkInsideObj(this.x1,this.y1,this[j])) {
//          if(f){console.log(checkLinesObj(cpa[0].l,this[j]));}
//          n1 = checkLinesObj(cpa[0].l,this[j]);    
//          a1 = angle(obj[j][n1].x,obj[j][n1].y,obj[j][n1+1].x,obj[j][n1+1].y);
//          a2 = angle(cpa[0].p.x,cpa[0].p.y,this.x1,this.y1);
//          if ((a2<a1&&a2>=0)||(a2<360&&a2>fixTodeg(a1+180))) {
//            if(f){console.log("a1");}
//            n1 = checkLinesObj(cpa[0].l,this[j]);
//            this[j].splice(n1+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
//            cpa.cut(0);
//          }else{ 
//            if(f){console.log("a2");}
//            n2 = checkLinesObj(cpa[cpa.length-1].l,this[j]);       
//            this[j].splice(n2+1,0,cpa[cpa.length-1].p,{x:this.x1, y:this.y1},{x:this.x1, y:this.y1},cpa[cpa.length-1].p );
//            cpa.cut(cpa.length-1);
//          }          
//        }
        
  
        
//        if (checkInsideObj(this.x2,this.y2,this[j])) {
//          n2 = checkLinesObj(cpa[cpa.length-1].l,this[j]);
//          a1 = angle(obj[j][n2].x,obj[j][n2].y,obj[j][n2+1].x,obj[j][n2+1].y);
//          a2 = angle(cpa[cpa.length-1].p.x,cpa[cpa.length-1].p.y,this.x2,this.y2);
//          if (a2<a1&&a2>a1-180) {
//            if(f){console.log("b1" );}
//            n1 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
//            this[j].splice(n1+1 , 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
//            cpa.cut(cpa.length-1);
//          }else{ 
//            if(f){console.log("b2");}
//            n2 =checkLinesObj(cpa[0].l,this[j]);
//            this[j].splice(n2+1, 0, cpa[0].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[0].p );
//            cpa.cut(0);
//          }          
//        }
        
        
        
//      }
 



//     if(f){console.log(cpa);}
 
 
//     if(f){cpa.forEach(s=>{console.log(checkLinesObj(s.l,this[j]));});} 
    
 
 
 
 
//     let nf2 = 0;
 
 
//       //if(checkLinesObj(cpa[mn].l,this[idxobj])<checkLinesObj(cpa[mn+1].l,this[idxobj])){
//       //     nt1 = mn;
//       //     nt2 = mn+1;
//       //   }else if(checkLinesObj(cpa[mn].l,this[idxobj])>checkLinesObj(cpa[mn+1].l,this[idxobj])){
//       //     nt1 = mn+1;
//       //     nt2 = mn;
//       //   }
         
//      if(cpa.length>1){ 
//        let idxobj=0; 
//        let nt1 , nt2;
//        for (let mn=0; mn< cpa.length   ; mn+=2) {
          
          
//          for(let jn=0;jn<this.length;jn++){
//            if(checkLinesObj(cpa[mn].l,this[jn])&&checkLinesObj(cpa[mn+1].l,this[jn])){
//              idxobj=jn;
//            }
//          }
//          if(checkLinesObj(cpa[mn].l,this[idxobj])<checkLinesObj(cpa[mn+1].l,this[idxobj])){
//            nt1 = mn;
//            nt2 = mn+1;
//          }else if(checkLinesObj(cpa[mn].l,this[idxobj])>checkLinesObj(cpa[mn+1].l,this[idxobj])){
//            nt1 = mn+1;
//            nt2 = mn;
//          }
//          let idx1,idx2 ;
//          idx1 =checkLinesObj(cpa[nt1].l,this[idxobj]);
//          idx2 =checkLinesObj(cpa[nt2].l,this[idxobj]);
//          let shp = this[idxobj];
   
//          // change the value first shape
//          let shp1= shp.slice(0,idx1+1);
//          shp1.push(cpa[nt1].p);
//          shp1.push(cpa[nt2].p);
//          shp1 = shp1.concat(shp.slice(idx2+1,this[idxobj].length ));
//          this[idxobj] = shp1;
          
//          // create and push the new shape
   
//          let shp2= shp.slice(idx1+1 ,idx2+1 );
//          shp2.unshift(cpa[nt1].p);
//          shp2.push(cpa[nt2].p);
//          this.splice(idxobj+1 ,0,shp2);
          
//          // checking the close shapes         
          
//          if(this[idxobj+1][0] != this[idxobj+1][this[idxobj+1].length-1]){
//            this[idxobj+1].push(this[idxobj+1][0]);
//          }
//          if(this[idxobj][0] != this[idxobj][this[idxobj].length-1]){
//            this[idxobj].push(this[idxobj][0]);
//          }
          
//          nf2++; 
 
//        }
   
//        j+=nf2;
//        //bol1=true;
//      }
      
      
      
      
      
      
      
//    }
    
 
//    //while(this[j][this[j].length-2] &&  this[j][this[j].length-2].x==this[j][this[j].length-1].x&& this[j][this[j].length-2].y==this[j][this[j].length-1].y){
//    //  this[j].cut(this[j].length-1);
//    //}
    
//  }
 
//  return bol1;
//}





























//for (let mn=0; mn< cpa.length ; mn+=2) {
//        let idx1, idx2 ;
//        idx1 =checkLinesObj(cpa[mn].l,this[j]);
//        idx2 =checkLinesObj(cpa[mn+1].l,this[j]);
//        let shp = this[j];
 
//        // change the value first shape
//        let shp1= shp.slice(0,idx1 +1);
//        shp1.push(cpa[mn].p);
//        shp1.push(cpa[mn+1].p);
//        shp1 = shp1.concat(shp.slice(idx2+1,this[j].length ));
//        this[j] = shp1;
        
//        // create and push the new shape
 
//        let shp2= shp.slice(idx1+1 ,idx2+1 );
//        shp2.unshift(cpa[mn ].p);
//        shp2.push(cpa[mn+1].p);
//        this.splice(j+1 ,0,shp2);
        
//        // checking the close shapes                 
//        if(this[j+1][0] != this[j+1][this[j+1].length-1]){
//          this[j+1].push(this[j+1][0]);
//        }
//        if(this[j][0] != this[j][this[j].length-1]){
//          this[j].push(this[j][0]);
//        }
        
//        nf2++; 
        
//      }
//Array.prototype.sliceShape=function(v1,v2,v3,v4,f) {

//  this.x1 = v1;
//  this.y1 = v2;
//  this.x2 = v3;
//  this.y2 = v4;
  
//  let cpa =[]; // cute point array
//  let bol1 =false;
//  let n1,n2,a1,a2;
//  for (let j=0;j<this.length; j++) { // this loop for check all shape if cuting line
 
 
//    cpa =[];
//    for (let i=0; i<this[j].length-1; i++) {
//      let m1 = Parangle(this.x1,this.y1,this.x2,this.y2, 1.5 );
//      let m2 = Parangle(limitFloat(this[j][i].x, 1), limitFloat(this[j][i].y, 1), limitFloat(this[j][i+1].x, 1), limitFloat(this[j][i+1].y, 1), -1);
 
//      let a1 = angle(this.x1,this.y1,this.x2,this.y2);
//      let a2 = angle(this[j][i].x, this[j][i].y, this[j][i+1].x, this[j][i+1].y);
 
//      if ( !( a1==a2 || a1==a2-180 || a1==a2+180 ) ) {
//        if (inte(m1,m2)) {
//          cpa.push({l:{x1:this[j][i].x,y1:this[j][i].y,x2:this[j][i+1].x,y2:this[j][i+1].y}, p:inte(m1,m2)});
//          //if(f){console.log({l:{x1:this[j][i].x,y1:this[j][i].y,x2:this[j][i+1].x,y2:this[j][i+1].y}, p:inte(m1,m2)});}
//        }
//      }
//    }
 
    
    
 
    
    
//    if(cpa.length>2){
      
 
//      // this line code to check reorder the cpa elements with x1 , y1
//      if (checkInsideObj(this.x1,this.y1,this[j])) {
           
 
//          let dist1 , numdist1,var1;
//          for(let sg=0;sg<cpa.length;sg++){
//            dist1 =dist(cpa[sg].p.x,cpa[sg].p.y,this.x1,this.y1);
//            numdist1=sg;
//            for(let hg=sg;hg<cpa.length;hg++){
//              if(sg!=hg&&dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1)){
//                dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1);
//                numdist1=hg;
//              }
//            }
//            var1 = cpa.slice(numdist1,numdist1+1);
//            cpa.cut(numdist1);
//            cpa.splice(numdist1,0,var1[0]);
            
//          }
          
          
  
          
          
          
//          //for(let m=0;m<cpa.length;m++){
//          //   if(m!=numdist1&&cpa[numdist1].p.x==cpa[m].p.x&&cpa[numdist1].p.y==cpa[m].p.y&&checkLinesObj(cpa[numdist1].l,this[j])<checkLinesObj(cpa[m].l,this[j]) ){
//          //     numdist1=m;
//          //   }
//          //}
          
//          //var1 = cpa.slice(numdist1,numdist1+1);
//          //cpa.cut(numdist1);
//          //cpa.unshift(var1[0]);
          
        
          
//          //if( cpa[0].p.x==cpa[1].p.x&&cpa[0].p.y==cpa[1].p.y&&checkLinesObj(cpa[0].l,this[j])<checkLinesObj(cpa[1].l,this[j]) ){
            
//          //  var1 = cpa.slice(1,2);
//          //  cpa.cut(1);
//          //  cpa.unshift(var1[0]);  
//          //}
        
        
//        if(f){cpa.forEach(s=>{console.log(checkLinesObj(s.l,this[j]));});} 
//        //if( cpa[cpa.length-2].p.x==cpa[cpa.length-1].p.x&&cpa[cpa.length-2].p.y==cpa[cpa.length-1].p.y&&checkLinesObj(cpa[cpa.length-2].l,this[j])<checkLinesObj(cpa[cpa.length-1].l,this[j]) ){
          
//        //  var1 = cpa.slice(cpa.length-1,cpa.length);
//        //  cpa.cut(cpa.length-1);
//        //  cpa.push(var1[0]);  
//        //}
        
        
        
      
//      }
      
      
      
      
      
      
      
      
      
//      // this line code to check reorder the cpa elements with x2 , y2 
//      if (checkInsideObj(this.x2,this.y2,this[j])) {
        
        
        
//        let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x2,this.y2);
//        let numdist1=0; 
//        let numdist2 ;
//        let var1 ;
//        for(let hg=0;hg<cpa.length;hg++){
//          if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
//            dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
//            numdist1=hg;
//          }
//        }
        
        
//        for(let m=0;m<cpa.length;m++){
//           if(m!=numdist1&&cpa[numdist1].p.x==cpa[m].p.x&&cpa[numdist1].p.y==cpa[m].p.y&&checkLinesObj(cpa[numdist1].l,this[j])>checkLinesObj(cpa[m].l,this[j]) ){
//             numdist1=m;
//           }
//        }
        
//        var1 = cpa.slice(numdist1,numdist1+1);
//        cpa.cut(numdist1);
//        cpa.push(var1[0]);  
        
        
        
        
//        if( cpa[cpa.length-2].p.x==cpa[cpa.length-1].p.x&&cpa[cpa.length-2].p.y==cpa[cpa.length-1].p.y&&checkLinesObj(cpa[cpa.length-2].l,this[j])>checkLinesObj(cpa[cpa.length-1].l,this[j]) ){
          
//          var1 = cpa.slice(cpa.length-2,cpa.length-1);
//          cpa.cut(cpa.length-2);
//          cpa.push(var1[0]);  
//        }
       
//      }
 
//    }
 
 
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    if (cpa.length>0) {
      
      
      
      
      
      
//      n1 =checkLinesObj(cpa[0].l,this[j]);
//      n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
     
//      if ( cpa.length==1) {
//        // this is working ////
//        if (checkInsideObj(this.x1,this.y1,this[j]) ) {
//          this[j].splice(n1+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
//        } else {
//          this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
//        }
 
//      } else {
      
 
        
//        if (checkInsideObj(this.x1,this.y1,this[j])) {
//          n1 = checkLinesObj(cpa[0].l,this[j]);    
//          a1 = angle(obj[j][n1].x,obj[j][n1].y,obj[j][n1+1].x,obj[j][n1+1].y);
//          a2 = angle(cpa[0].p.x,cpa[0].p.y,this.x1,this.y1);
//          if ((a2<a1&&a2>=0)||(a2<360&&a2>fixTodeg(a1+180))) {
//            if(f){console.log("a1");}
//            n1 = checkLinesObj(cpa[0].l,this[j]);
//            this[j].splice(n1+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
//            cpa.cut(0);
//          }else{ 
//            if(f){console.log("a2");}
//            n2 = checkLinesObj(cpa[cpa.length-1].l,this[j]);       
//            this[j].splice(n2+1,0,cpa[cpa.length-1].p,{x:this.x1, y:this.y1},{x:this.x1, y:this.y1},cpa[cpa.length-1].p );
//            cpa.cut(cpa.length-1);
//          }          
//        }
        
  
        
//        if (checkInsideObj(this.x2,this.y2,this[j])) {
//          n2 = checkLinesObj(cpa[cpa.length-1].l,this[j]);
//          a1 = angle(obj[j][n2].x,obj[j][n2].y,obj[j][n2+1].x,obj[j][n2+1].y);
//          a2 = angle(cpa[cpa.length-1].p.x,cpa[cpa.length-1].p.y,this.x2,this.y2);
//          if (a2<a1&&a2>a1-180) {
//            if(f){console.log("b1");}
//            n1 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
//            this[j].splice(n1+1, 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
//            cpa.cut(cpa.length-1);
 
//          }else{ 
//            if(f){console.log("b2");}
//            n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
//            this[j].splice(n2+1 , 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
//            cpa.cut(cpa.length-1);
//          }          
//        }
        
        
        
//      }
 



 
 
 
 
 
 
 
 
 

    
//      let nf2 = 0;
//      if(f){console.log(cpa);}
//      if(cpa.length>1){
//      for (let mn=0; mn< cpa.length ; mn+=2) {
//        let idx1, idx2 ;
//        idx1 =checkLinesObj(cpa[mn].l,this[j]);
//        idx2 =checkLinesObj(cpa[mn+1].l,this[j]);
//        let shp = this[j];
 
//        // change the value first shape
//        let shp1= shp.slice(0,idx1 +1);
//        shp1.push(cpa[mn].p);
//        shp1.push(cpa[mn+1].p);
//        shp1 = shp1.concat(shp.slice(idx2+1,this[j].length ));
//        this[j] = shp1;
        
//        // create and push the new shape
 
//        let shp2= shp.slice(idx1+1 ,idx2+1 );
//        shp2.unshift(cpa[mn ].p);
//        shp2.push(cpa[mn+1].p);
//        this.splice(j+1 ,0,shp2);
        
//        // checking the close shapes                 
//        if(this[j+1][0] != this[j+1][this[j+1].length-1]){
//          this[j+1].push(this[j+1][0]);
//        }
//        if(this[j][0] != this[j][this[j].length-1]){
//          this[j].push(this[j][0]);
//        }
        
//        nf2++; 
        
//      }
 
//      j+=nf2;
//      bol1=true;
//      }
      
//    }
    
 
//    //while(this[j][this[j].length-2] &&  this[j][this[j].length-2].x==this[j][this[j].length-1].x&& this[j][this[j].length-2].y==this[j][this[j].length-1].y){
//    //  this[j].cut(this[j].length-1);
//    //}
    
//  }
 
//  return bol1;
//}






 
        
