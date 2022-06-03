import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post{
    @PrimaryGeneratedColumn('uuid')
    id_publicacion: string;

    @CreateDateColumn()
    fecha_creacion:Date;

    @Column({ length: 100})
    titulo:string;

    @Column({ length: 20})
    telefono:string;

    @Column({ length: 10})
    tamano_mascota:string;

    @Column({ length: 20})
    color_mascota:string;

    @Column({ length: 200})
    coordenadas:string;

    @Column({ length: 1000})
    imagenes:string;

    @Column({ type: 'char' })
    estado_public:string;

    @Column({ length: 200, nullable: true})
    descripcion:string;

    @Column({ length: 50, nullable: true})
    patron_color:string;

    @Column({ length: 50, nullable: true})
    rango_etareo:string;

    @Column({ type: 'int' , nullable: true})
    recompensa:number;

    @Column({ length: 100})
    id_usuario:string;

    @Column({ length: 2})
    id_tipo:string;

    @Column({ length: 4})
    id_comuna:string;

    @Column({ length: 5})
    id_especie:string;


}