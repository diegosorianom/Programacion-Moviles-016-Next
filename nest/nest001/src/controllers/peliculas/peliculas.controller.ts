import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { PeliculasService } from 'src/services/peliculas/peliculas.service';
import { Pelicula } from 'src/typescript/peliculas';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Get() // GET /peliculas
  async obtenerTodas() {
    return this.peliculasService.obtenerTodas();
  }

  @Get(':id') // GET /peliculas/:id
  async obtenerPorId(@Param('id') id: string) {
    return this.peliculasService.obtenerPorId(Number(id));
  }

  @Post() // POST /peliculas
  async crear(@Body() pelicula: Pelicula) {
    return this.peliculasService.crear(pelicula);
  }

  @Put(':id') // PUT /peliculas/:id
  async actualizar(@Param('id') id: string, @Body() data: Partial<Pelicula>) {
    return this.peliculasService.actualizar(Number(id), data);
  }

  @Delete(':id') // DELETE /peliculas/:id
  async eliminar(@Param('id') id: string) {
    return this.peliculasService.eliminar(Number(id));
  }

  @Get('buscar/nombre') // GET /peliculas/buscar/nombre?nombre=El Padrino
  async buscarPorNombre(@Query('nombre') nombre: string) {
    return this.peliculasService.buscarPorNombre(nombre);
  }
}
