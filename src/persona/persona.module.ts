import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaController } from './controllers/persona.controller';
import { Persona } from './entities/persona.entity';
import { PersonaService } from './services/persons.service';

@Module({
    imports : [TypeOrmModule.forFeature([Persona])],
    providers : [PersonaService],
    controllers : [PersonaController]
})
export class PersonaModule {

}