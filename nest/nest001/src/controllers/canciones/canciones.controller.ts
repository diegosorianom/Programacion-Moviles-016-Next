import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('canciones')
export class CancionesController {
    @Get('/canciones')
    getCancion(@Param('productId') cancionId: string) {
        return `lista canciones`;
    }

    @Get('/canciones/:id')
    getCancionId(@Param('id') id: string) {
        return `id de la cancion: ${id}`;
    }

    @Get('/canciones?title=ramona')
    getCancionName(@Param('title') title: string) {
        return `nombre de la cancion: ${title}`;
    }

    @Delete('/canciones/:id')
    deleteCancionId(@Param('id') id: string) {
        return `cancion eliminada: ${id}`;
    }

    @Put('/canciones/:id')
    putCancionId(@Param('id') id: string) {
        return `cancion añadida: ${id}`;
    }

    @Post('/canciones/title/:category')
    postCategoryId(@Param('category') category:string) {
        return `categoria añadida: ${category}`;
    }
}