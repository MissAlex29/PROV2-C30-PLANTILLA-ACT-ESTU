//Clase o molde para la restricción 
class Link {
    constructor(bodyA,bodyB){//Argumentos para crear restriccion entre 2 cuerpos
      //Variable para obtener el indice del ultimo rectángulo 
        var lastlink = bodyA.body.bodies.length-2;
     //Crear restricción usando Constraint.create
     this.link = Constraint.create({
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          //Riguidez 
          stiffness:0.01
        });
        //Agregar la restricción al mundo
        World.add(engine.world,this.link);
    } 
    
}

