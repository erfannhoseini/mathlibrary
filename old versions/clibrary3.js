


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

  var b = new Boid(width/2, width/2, Math.random() * 2 * Math.PI);
  boids.push(b);
  all_boids.push(b);

  for (let q=0; q<2000; q++) {
    for (i = 0; i < boids.length; i++) {
      var p = boids[i];
      p.update(all_boids, boids);
      if (!p.dead  && boids.length <3) {
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

    this.angle =  pow(random(), 20)+ angle;

    this.dx =  cos(this.angle);
    this.dy =  sin(this.angle);

    this.d = 0;
    this.dead = false;
  }



  update(all_boids, boids) {


    this.d  += 2 ;
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

      var its = inte(this, b);

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


Array.prototype.comp_style2 =function(v1) {

  this.limtnum = 4;

  for (let i=0; i<v1; i++) {
    let numforobj=this.length;
    for (let j=0; j<numforobj; j++) {
      let rand1= random(1, 10);
      let rand2= random(1, 10);
    let obj1 = {x:
    this[j].x, y:
    this[j].y, w:
    this[j].w, h:
      this[j].h
    }
    ;

    if (rand1 < 5 && this[j].w >this.limtnum && this[j].h >this.limtnum ) {

    this[j] = {x:
    this[j].x, y:
    this[j].y, w:
      int(constrain(obj1.w/rand2, this.limtnum, obj1.w-this.limtnum)), h:
      this[j].h
    }
    ;
    this.push( {
    x:
    obj1.x+this[j].w, y:
    this[j].y, w:
      int(obj1.w-this[j].w), h:
      this[j].h
    }
    ) ;
  } else if (rand1 > 5 && this[j].w >this.limtnum && this[j].h >this.limtnum ) {

  this[j] = {x:
  this[j].x, y:
  this[j].y, w:
  this[j].w, h:
    int(constrain(obj1.h/rand2, this.limtnum, obj1.h-this.limtnum))
  }
  ;
  this.push( {
  x:
  obj1.x, y:
  this[j].y+this[j].h, w:
  this[j].w, h:
    int(obj1.h-this[j].h)
  }
  )
}

}

}


}







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




Array.prototype.comp_style1=function(ww1, hh1, ww2, hh2, dw, dh) {


  this.dw =dw;
  this.dh =dh;
  this.x =0;
  this.y =0;
  this.w =0;
  this.h =0;
  this.s = 10 ;
  this.area = dw*dh;
  this.fillArea =0;
  this.funcBol=true;

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

    if ( this.length > 0) {

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




        for ( let j  of this  ) {
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


    this.push( {
    x:
    this.x, y:
    this.y, w:
    this.w, h:
      this.h
    }
    );
    this.fillArea += this.w*this.h;
  }


  this.obj2 =[];


  for (let b=0; b<this.length; b++) {
    this.obj2.push( {
    x:
    this[b].x+dw, y:
    this[b].y, w:
    this[b].w, h:
      this[b].h
    }
    );
  }
  for (let b=0; b<this.length; b++) {
    this.obj2.push( {
    x:
    this[b].x, y:
    this[b].y+dh, w:
    this[b].w, h:
      this[b].h
    }
    );
  }
  for (let b=0; b<this.length; b++) {
    this.obj2.push( {
    x:
    this[b].x+dw, y:
    this[b].y+dh, w:
    this[b].w, h:
      this[b].h
    }
    );
  }

  this.attach(this, this.obj2);
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
      obj = cutarr(obj, n2 );



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
  let n1,n2,a1,a2;
  for (let j=0;j<this.length; j++) { // this loop for check all shape if cuting line
 
 
    cpa =[];
    for (let i=0; i<this[j].length-1; i++) {
      let m1 = Parangle(this.x1,this.y1,this.x2,this.y2, 1.5 );
      let m2 = Parangle(limitFloat(this[j][i].x, 1), limitFloat(this[j][i].y, 1), limitFloat(this[j][i+1].x, 1), limitFloat(this[j][i+1].y, 1), -1);
 
      let a1 = angle(this.x1,this.y1,this.x2,this.y2);
      let a2 = angle(this[j][i].x, this[j][i].y, this[j][i+1].x, this[j][i+1].y);
 
      if ( !( a1==a2 || a1==a2-180 || a1==a2+180 ) ) {
        if (inte(m1,m2)) {
          cpa.push({l:{x1:this[j][i].x,y1:this[j][i].y,x2:this[j][i+1].x,y2:this[j][i+1].y}, p:inte(m1,m2)});
        }
      }
    }
 
    
    
 
    
    
    if(cpa.length>2){
      
 
      // this line code to check reorder the cpa elements with x1 , y1
      if (checkInsideObj(this.x1,this.y1,this[j])) {
      let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x1,this.y1);
      let numdist1=0;
      for(let hg=0;hg<cpa.length;hg++){
        if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1)){
          dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x1,this.y1);
          numdist1=hg;
        }
      }
      
      
      for(let m=0;m<cpa.length;m++){
         if(m!=numdist1&&cpa[numdist1].p.x==cpa[m].p.x&&cpa[numdist1].p.y==cpa[m].p.y&&checkLinesObj(cpa[numdist1].l,this[j])<checkLinesObj(cpa[m].l,this[j]) ){
           numdist1=m;
         }
      }
      
      let var1 = cpa.slice(numdist1,numdist1+1);
      cpa.cut(numdist1);
      cpa.unshift(var1[0]);
      
      
      
      if( cpa[0].p.x==cpa[1].p.x&&cpa[0].p.y==cpa[1].p.y&&checkLinesObj(cpa[0].l,this[j])>checkLinesObj(cpa[1].l,this[j]) ){
        
        var1 = cpa.slice(1,2);
        cpa.cut(1);
        cpa.unshift(var1[0]);  
      }
      
      }
      
      
      
      
      
      
      
      
      
      // this line code to check reorder the cpa elements with x2 , y2 
      if (checkInsideObj(this.x2,this.y2,this[j])) {
      let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x2,this.y2);
      let numdist1=0; 
      let numdist2 ;
      let var1 ;
      for(let hg=0;hg<cpa.length;hg++){
        if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
          dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
          numdist1=hg;
        }
      }
      
      
      for(let m=0;m<cpa.length;m++){
         if(m!=numdist1&&cpa[numdist1].p.x==cpa[m].p.x&&cpa[numdist1].p.y==cpa[m].p.y&&checkLinesObj(cpa[numdist1].l,this[j])>checkLinesObj(cpa[m].l,this[j]) ){
           numdist1=m;
         }
      }
      
      var1 = cpa.slice(numdist1,numdist1+1);
      cpa.cut(numdist1);
      cpa.push(var1[0]);  
      if( cpa[cpa.length-2].p.x==cpa[cpa.length-1].p.x&&cpa[cpa.length-2].p.y==cpa[cpa.length-1].p.y&&checkLinesObj(cpa[cpa.length-2].l,this[j])>checkLinesObj(cpa[cpa.length-1].l,this[j]) ){
        
        var1 = cpa.slice(cpa.length-2,cpa.length-1);
        cpa.cut(cpa.length-2);
        cpa.push(var1[0]);  
      }
       
      }
 
    }
 
 
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (cpa.length>0) {
      
      
      
      
      
      
      n1 =checkLinesObj(cpa[0].l,this[j]);
      n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
     
      if ( cpa.length==1) {
        // this is working ////
        if (checkInsideObj(this.x1,this.y1,this[j]) ) {
          this[j].splice(n1+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
        } else {
          this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
        }
 
      } else {
      
 
        
        if (checkInsideObj(this.x1,this.y1,this[j])) {
          n1 = checkLinesObj(cpa[0].l,this[j]);    
          a1 = angle(obj[j][n1].x,obj[j][n1].y,obj[j][n1+1].x,obj[j][n1+1].y);
          a2 = angle(cpa[0].p.x,cpa[0].p.y,this.x1,this.y1);
          if ((a2<a1&&a2>=0)||(a2<360&&a2>fixTodeg(a1+180))) {
            n2 = checkLinesObj(cpa[0].l,this[j]);
            this[j].splice(n2+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
            cpa.cut(0);
          }else{ 
            n1 = checkLinesObj(cpa[cpa.length-1].l,this[j]);       
            this[j].splice(n1+1,0,cpa[cpa.length-1].p,{x:this.x1, y:this.y1},{x:this.x1, y:this.y1},cpa[cpa.length-1].p );
            cpa.cut(cpa.length-1);
          }          
        }
        
  
        
        if (checkInsideObj(this.x2,this.y2,this[j])) {
          n2 = checkLinesObj(cpa[cpa.length-1].l,this[j]);
          a1 = angle(obj[j][n2].x,obj[j][n2].y,obj[j][n2+1].x,obj[j][n2+1].y);
          a2 = angle(cpa[cpa.length-1].p.x,cpa[cpa.length-1].p.y,this.x2,this.y2);
          if (a2<a1&&a2>a1-180) {
            n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
            this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
            cpa.cut(cpa.length-1);
 
          }else{ 
            n1 =checkLinesObj(cpa[0].l,this[j]);
            this[j].splice(n1+1 , 0, cpa[0].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[0].p );
            cpa.cut(0);
          }          
        }
        
        
        
      }
 



 
 
 
 
 
 
 
 
 


      if(f){console.log(cpa);}
      let nf2 = 0;
      
      if(cpa.length>1){
      for (let mn=0; mn< cpa.length   ; mn+=2) {
        let idx1, idx2 ;
        idx1 =checkLinesObj(cpa[mn].l,this[j]);
        idx2 =checkLinesObj(cpa[mn+1].l,this[j]);
        let shp = this[j];
        //if(f){console.log(idx1);}
        // change the value first shape
        let shp1= shp.slice(0,idx1 +1);
        shp1.push(cpa[mn].p);
        shp1.push(cpa[mn+1].p);
        
        //if(f){console.log(idx2);}
        shp1 = shp1.concat(shp.slice(idx2 +1,this[j].length ));
        this[j] = shp1;
        
        // create and push the new shape
       
        let shp2= shp.slice(idx1+1 ,idx2+1 );
        shp2.unshift(cpa[mn ].p);
        shp2.push(cpa[mn+1].p);
        this.splice(j+1 ,0,shp2);
        
        // checking the close shapes                 
        if(this[j+1][0] != this[j+1][this[j+1].length-1]){
          this[j+1].push(this[j+1][0]);
        }
        if(this[j][0] != this[j][this[j].length-1]){
          this[j].push(this[j][0]);
        }
 
        nf2++;
      }
 
      j+=nf2;
      bol1=true;
      }
      
    }
    
 
    while(this[j][this[j].length-3] && this[j][this[j].length-3].x==this[j][this[j].length-2].x==this[j][this[j].length-1].x&&this[j][this[j].length-3].y==this[j][this[j].length-2].y==this[j][this[j].length-1].y){
      this[j].cut(this[j].length-1);
    }
    
  }
 
  return bol1;
}







//Array.prototype.sliceShape=function(v1,v2,v3,v4,f) {

//  this.x1 = v1;
//  this.y1 = v2;
//  this.x2 = v3;
//  this.y2 = v4;
  
//  let cpa =[]; // cute point array
//  let bol1 =false;
 
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
    
//    if(cpa.length>2){
//      let dist1 =dist(cpa[0].p.x,cpa[0].p.y,this.x2,this.y2);
//      let numdist1=0;
//      for(let hg=0;hg<cpa.length;hg++){
//        if(dist1>dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2)){
//          dist1=dist(cpa[hg].p.x,cpa[hg].p.y,this.x2,this.y2);
//          numdist1=hg;
//        }
//      }
//      let var1 = cpa.slice(numdist1,numdist1+1);
//      cpa.cut(numdist1);
//      cpa.push(var1[0]);
//    }
 
   
 
    
//    if (cpa.length>0) {
//      let n1 =checkLinesObj(cpa[0].l,this[j]);
//      let n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
     
//      if ( cpa.length==1) {
       
//        if (checkInsideObj(this.x1,this.y1,this[j]) ) {
//          this[j].splice(n1+1, 0, cpa[0].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[0].p );
//        } else {
//          this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
//        }
 
//      } else {
      
//        let a1 = angle(obj[j][n1].x,obj[j][n1].y,obj[j][n1+1].x,obj[j][n1+1].y);
//        let a2 = angle(cpa[0].p.x,cpa[0].p.y,this.x1,this.y1);
 
//        if (checkInsideObj(this.x1,this.y1,this[j])) {
          
//          if(f){console.log(2);}
//          if ( ((a2<a1&&a2>0)||(a2<360&&a2>a1+180)) ) {
//            n1 =checkLinesObj(cpa[0].l,this[j]);       
//            this[j].splice(n1+1,0,cpa[0].p,{x:this.x1, y:this.y1},{x:this.x1, y:this.y1},cpa[0].p );
//            cpa.cut(0);
//            if (checkInsideObj(this.x2,this.y2,this[j])) {
//              n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
//              this[j].splice(n2+1 , 0, cpa[cpa.length-1].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[cpa.length-1].p );
//              cpa.cut(cpa.length-1);
//            }
 

//          }else{ 
//            if(f){console.log(3);}
//            n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
//            this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:this.x1, y:this.y1}, {x:this.x1, y:this.y1}, cpa[cpa.length-1].p );
//            cpa.cut(cpa.length-1);
//            n1 =checkLinesObj(cpa[0].l,this[j]);  
//            if (checkInsideObj(this.x2,this.y2, this[j]) ) {
//              this[j].splice(n1+1,0, cpa[0].p, {x:this.x2, y:this.y2}, {x:this.x2, y:this.y2}, cpa[0].p );
//              cpa.cut(0);
//            }
//          }          
//        }
//      }
//      bol1=true;
//    }









//    if (cpa.length>1) {

//      let n2 = 0;
//      let idx1, idx2 ;

//      for (let mn=0; mn< cpa.length-1; mn+=1) {
        
//        idx1 =checkLinesObj(cpa[mn].l,this[j]);
//        let shp = this[j];
        
//        // change the value first shape
//        let shp1= shp.slice(0,idx1 +1);
//        shp1.push(cpa[mn].p);
//        shp1.push(cpa[mn+1].p);
//        idx2 =checkLinesObj(cpa[mn+1].l,this[j]);
//        shp1 = shp1.concat(shp.slice(idx2+1 ,obj[j].length)); // we have +1//////////////
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
                   
       


//        n2++;
//      }

//      j+=n2;
//      bol1=true;
      
//    }
    
    
    
    
    
    
    
 
//    while(this[j][this[j].length-2] && this[j][this[j].length-2].x==this[j][this[j].length-1].x&&this[j][this[j].length-2].y==this[j][this[j].length-1].y){
//      this[j].cut(this[j].length-1);
//    }
    
//  }
 
//  return bol1;
//}




        //push(); 
        //strokeWeight(3);
        ////line(obj[j][cpa[0].cs].x,obj[j][cpa[0].cs].y,obj[j][cpa[0].cs+1].x,obj[j][cpa[0].cs+1].y);
        //let a1 = angle(obj[j][cpa[0].cs].x,obj[j][cpa[0].cs].y,obj[j][cpa[0].cs+1].x,obj[j][cpa[0].cs+1].y);
        //console.log(a1);
        ////console.log(angle(obj[j][cpa[cpa.length-1].cs].x,obj[j][cpa[cpa.length-1].cs].y,obj[j][cpa[cpa.length-1].cs+1].x,obj[j][cpa[cpa.length-1].cs+1].y));
        //pop();
        //if (checkInsideObj(x1, y1, this[j]) && dist(x1, y1, cpa[0].p.x, cpa[0].p.y)<=dist(x1, y1, cpa[cpa.length-1].p.x, cpa[cpa.length-1].p.y) ) {
        //  if(f){console.log(1,cpa);} 
        //  this[j].splice(cpa[0].cs+1, 0, cpa[0].p, {x:x1, y:y1}, {x:x1, y:y1}, cpa[0].p );
        //  cpa.cut(0);
        //  cpa.opEachElements(4);
        //  if (checkInsideObj(x2, y1, this[j]) ) {
        //    this[j].splice(cpa[cpa.length-1].cs+1, 0, cpa[cpa.length-1].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[cpa.length-1].p );
        //    cpa.cut(cpa.length-1);
        //  }
        //} else if (checkInsideObj(x1, y1, this[j]) && dist(x1, y1, cpa[0].p.x, cpa[0].p.y)>dist(x1, y1, cpa[cpa.length-1].p.x, cpa[cpa.length-1].p.y) ) {
        //  if(f){console.log(2,cpa);} 
        //  this[j].splice(cpa[cpa.length-1].cs+1, 0, cpa[cpa.length-1].p, {x:x1, y:y1}, {x:x1, y:y1}, cpa[cpa.length-1].p );
        //  cpa.cut(cpa.length-1);
        //  cpa.opEachElements(4);
        //  if (checkInsideObj(x2, y2, this[j]) ) {
        //    this[j].splice(cpa[0].cs+1, 0, cpa[0].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[0].p );
        //    cpa.cut(0);
        //  }
        //}

        //let shp = this[j];
    
        //let shp2= shp.slice( cpa[mn ].cs+1, cpa[mn+1 ].cs+1);
        //shp2.unshift(cpa[mn ].p);
        //shp2.push(cpa[mn+1 ].p);
        //this.splice(j+1, 0, shp2);


        //if (this[j+1][0] != this[j+1][this[j+1].length-1]) {
        //  this[j+1].push(this[j+1][0]);
        //}
        
        
        

//Array.prototype.sliceShape=function(xx1,yy1,xx2,yy2){



//   let x1 = xx1;
//   let y1 = yy1;
//   let x2 = xx2;
//   let y2 = yy2;

//   let cpa =[]; // cute point array
//   let bol1 =false;

//   for(let j=0;j<this.length;j++){ // this loop for check all shape if cuting line

//             for(let i=0;i<this[j].length-1;i++){
//                let m1 = Parangle(x1,y1,x2,y2,1.5 );
//                let m2 = Parangle(limitFloat(this[j][i].x,1),limitFloat(this[j][i].y,1),limitFloat(this[j][i+1].x,1),limitFloat(this[j][i+1].y,1),-1);

//                let a1 = angle(x1,y1,x2,y2);
//                let a2 = angle(this[j][i].x,this[j][i].y,this[j][i+1].x,this[j][i+1].y);
//                console.log(m1,m2,a1,a2);
//                //console.log(this[j][i].x,this[j][i].y,this[j][i+1].x,this[j][i+1].y );
//                if( !( a1==a2 || a1==a2-180 || a1==a2+180 ) ){

//                if(inte(m1,m2)){
//                  cpa.push({ cs: i , p: inte(m1,m2) });
//                }

//                }


//             }




//            if(cpa.length==1){

//                let tf1=false;
//                let tf2=false;
//                let tf3=false;
//                let tf4=false;
//                let m3 =Parangle(x2,y2,0,y2,-2) ;
//                let m4 =Parangle(x2,y2,dm,y2,-2) ;
//                let m5 =Parangle(x2,y2,x2,0,-2) ;
//                let m6 =Parangle(x2,y2,x2,dm,-2) ;

//                for(let i=0;i<this[j].length-1;i++){
//                   let m7=Parangle(this[j][i].x,this[j][i].y,this[j][i+1].x,this[j][i+1].y,2) ;
//                   if(inte (m3,m7)){
//                     tf1 = true;
//                   }
//                   if(inte (m4,m7)){
//                     tf2 = true;
//                   }
//                   if(inte (m5,m7)){
//                     tf3 = true;
//                   }
//                   if(inte (m6,m7)){
//                     tf4 = true;
//                   }
//                   if(tf1==true&&tf2==true&&tf3==true&tf4==true){
//                     break;
//                   }
//                }

//                if(tf1==true && tf2==true && tf3==true && tf4==true){
//                  this[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x2,y:y2},{x:x2,y:y2},cpa[0].p );

//                }else{
//                  this[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x1,y:y1},{x:x1,y:y1},cpa[0].p );

//                }

//                cpa =[];
//                bol1=true;



//            }else if(cpa.length>1){


//               n2 = 0;
//               for(let mn=0;mn< cpa.length-1  ;mn+=1){

//                   let shp = this[j];

//                   let shp2= shp.slice( cpa[mn ].cs+1 ,cpa[mn+1 ].cs+1);
//                   shp2.unshift(cpa[mn ].p);
//                   shp2.push(cpa[mn+1 ].p);
//                   this.splice(j+1 ,0,shp2);


//                   if(this[j+1][0] != this[j+1][this[j+1].length-1]){
//                     this[j+1].push(this[j+1][0]);
//                   }


//                 n2++;

//               }

//               j+=n2;
//               cpa =[];
//               bol1=true;



//          }



//   while(this[j][this[j].length-2] && this[j][this[j].length-2].x==this[j][this[j].length-1].x&&this[j][this[j].length-2].y==this[j][this[j].length-1].y){
//     this[j].cut(this[j].length-1);
//   }


//  }

//  return bol1;
//}


        
        
        //if (checkInsideObj(x1,y1,this[j])) {
          
        //  if ( ((a2<a1&&a2>0)||(a2<360&&a2>a1+180)) ) {
             
        //    if(f){console.log(1);} 
        //    n1 =checkLinesObj(cpa[0].l,this[j]);
        //    if(f){
        //      push();
        //      strokeWeight(4);
        //      stroke(0,0,255);
        //      line(cpa[0].l.x1,cpa[0].l.y1,cpa[0].l.x2,cpa[0].l.y2);
        //      pop();
        //      }  
        //      this[j].splice(n1+1,0,cpa[0].p,{x:x1, y:y1},{x:x1, y:y1},cpa[0].p );
        //      cpa.cut(0);
 
        //      if(f){
        //      push();
        //      strokeWeight(4);
        //      stroke(255,0,0);
        //      line(cpa[cpa.length-1].l.x1,cpa[cpa.length-1].l.y1,cpa[cpa.length-1].l.x2,cpa[cpa.length-1].l.y2);
        //      pop();
        //      }
 
 
 
        //    if (checkInsideObj(x2,y2,this[j])) {
        //      n2 =checkLinesObj(cpa[cpa.length-1].l,this[j]);
        //      //if(f){
        //      //push();
        //      //strokeWeight(4);
        //      //line(cpa[0].l.x1,cpa[0].l.y1,cpa[0].l.x2,cpa[0].l.y2);
        //      //pop();
        //      //}
        //      if(f){console.log(n2);}
        //      this[j].splice(n2+1 , 0, cpa[cpa.length-1].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[cpa.length-1].p );
        //      cpa.cut(cpa.length-1);
 
        //    }






        //  }else{ 
        //    if(f){console.log(2);}
        //    this[j].splice(n2+1, 0, cpa[cpa.length-1].p, {x:x1, y:y1}, {x:x1, y:y1}, cpa[cpa.length-1].p );
        //    cpa.cut(cpa.length-1);
        //    if (checkInsideObj(x2, y2, this[j]) ) {
        //      this[j].splice(cpa[0].cs+1, 0, cpa[0].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[0].p );
        //      cpa.cut(0);
        //    }
        //  }
          
        //}
 
        //checkLinesObj(x1,y1,x2,y2,Obj)
        
        
        
        
        
        
        
        
        
        //if (checkInsideObj(x1, y1, this[j]) ) {
          
        //  if ( ((a2<a1&&a2>0)||(a2<360&&a2>a1+180)) ) {
            
        //    this[j].splice(cpa[0].cs+1, 0, cpa[0].p, {x:x1, y:y1}, {x:x1, y:y1}, cpa[0].p );
        //    cpa.cut(0);
        //    cpa.opEachElements(4);
        //    console.log(cpa); 
        //    if (checkInsideObj(x2, y1, this[j]) ) {
        //      this[j].splice(cpa[cpa.length-1].cs+1, 0, cpa[cpa.length-1].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[cpa.length-1].p );
        //      cpa.cut(cpa.length-1);
           
        //      cpa.opEachElements(2);
            
            
        //    }

        //  }else{
          
        //    this[j].splice(cpa[cpa.length-1].cs+1, 0, cpa[cpa.length-1].p, {x:x1, y:y1}, {x:x1, y:y1}, cpa[cpa.length-1].p );
        //    cpa.cut(cpa.length-1);
        //    if (checkInsideObj(x2, y2, this[j]) ) {
        //      this[j].splice(cpa[0].cs+1, 0, cpa[0].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[0].p );
        //      cpa.cut(0);
        //    }
        //  }
          
        //}
        
        
        
        
        
        
        
        
        
        //if (checkInsideObj(x1, y1, this[j]) && dist(x1, y1, cpa[0].p.x, cpa[0].p.y)<=dist(x1, y1, cpa[cpa.length-1].p.x, cpa[cpa.length-1].p.y)) {
        //  //if(f){console.log(1,cpa);} 
        //  this[j].splice(cpa[0].cs+1, 0, cpa[0].p, {x:x1, y:y1}, {x:x1, y:y1}, cpa[0].p );
        //  cpa.cut(0);
        //  cpa.opEachElements(4);
        //  if (checkInsideObj(x2, y1, this[j]) ) {
        //    this[j].splice(cpa[cpa.length-1].cs+1, 0, cpa[cpa.length-1].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[cpa.length-1].p );
        //    cpa.cut(cpa.length-1);
        //  }
        //} else if (checkInsideObj(x2, y2, this[j]) && dist(x1, y1, cpa[0].p.x, cpa[0].p.y)>dist(x1, y1, cpa[cpa.length-1].p.x, cpa[cpa.length-1].p.y) ) {
        //  if(f){console.log(2,cpa);} 
        //  this[j].splice(cpa[cpa.length-1].cs+1, 0, cpa[cpa.length-1].p, {x:x1, y:y1}, {x:x1, y:y1}, cpa[cpa.length-1].p );
        //  cpa.cut(cpa.length-1);
        //  cpa.opEachElements(4);
        //  if (checkInsideObj(x2, y2, this[j]) ) {
        //    this[j].splice(cpa[0].cs+1, 0, cpa[0].p, {x:x2, y:y2}, {x:x2, y:y2}, cpa[0].p );
        //    cpa.cut(0);
        //  }
        //}
        
        
        



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
  var v = {x:
    limitFloat(x, 2), y:
    limitFloat(y, 2)
  }
  ;

  return v;
}

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function checkInsideObj(x, y, a) {

  this.bol1=false;
  this.bol2=false;
  this.bol3=false;
  this.bol4=false;
  this.l1 =Parangle(x, y, 0, y, -2);
  this.l2 =Parangle(x, y, dm, y, -2);
  this.l3 =Parangle(x, y, x, 0, -2);
  this.l4 =Parangle(x, y, x, dm, -2);

  for (let i=0; i<a.length-1; i++) {
    this.l5=Parangle(a[i].x, a[i].y, a[i+1].x, a[i+1].y, 2) ;
    if (inte(this.l1, this.l5)) {
      this.bol1 = true;
    }
    if (inte(this.l2, this.l5)) {
      this.bol2 = true;
    }
    if (inte(this.l3, this.l5)) {
      this.bol3 = true;
    }
    if (inte(this.l4, this.l5)) {
      this.bol4 = true;
    }
    if (this.bol1 && this.bol2 && this.bol3 & this.bol4 ) {
      break;
    }
  }

  return (this.bol1 && this.bol2 && this.bol3 & this.bol4 );
}





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













Object.prototype.indexobj = function(n) {
  return Object.keys(this)[n];
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
  return {x1 :limitFloat(lerp( x1, x2, n2), 3), y1 :limitFloat(lerp( y1, y2, n2), 3), x2  :limitFloat(lerp( x1, x2, 1-n2), 3), y2 :limitFloat(lerp( y1, y2, 1-n2), 3)};
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




function fixTodeg(n){
  return n%360;
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