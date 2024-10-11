type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1a
const obtenPacientesAsignadosAPediatria = pacientes.filter (
  ( paciente: Pacientes ) => paciente.especialidad === "Pediatra"
);

console.log("Pacientes asignados a pediatria:", obtenPacientesAsignadosAPediatria);


//Apartado 1b
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = pacientes.filter (
  ( paciente: Pacientes ) => paciente.especialidad === "Pediatra" && paciente.edad < 10
);

console.log("Pacientes asignados a pediatria menores de 10 años:", obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios);


//Apartado 2

const activarProtocoloUrgencia = pacientes.every(
  (paciente : Pacientes): boolean => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
);

console.log (activarProtocoloUrgencia);


//Apartado 3
const reasignaPacientesAMedicoFamilia : Pacientes[] = pacientes.map((paciente: Pacientes) => {
  if (paciente.especialidad === "Pediatra") {
      return {
          ...paciente,
          especialidad: "Medico de familia"
      };
  }
  return paciente;
});

console.log("Pacientes reasignados", reasignaPacientesAMedicoFamilia);

//Apartado 4
const HayPacientesDePediatria = reasignaPacientesAMedicoFamilia.some(
  (paciente : Pacientes) => paciente.especialidad === "Pediatra"
);

console.log(HayPacientesDePediatria);

//Apartado 5

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  
  const cuentaPacientesPorEspecialidad = (pacientes: Pacientes []): NumeroPacientesPorEspecialidad => {
    return pacientes.reduce(
      (contador : NumeroPacientesPorEspecialidad, paciente : Pacientes) => {
        if (paciente.especialidad === "Medico de familia") {
          contador.medicoDeFamilia++;
        } else if (paciente.especialidad === "Pediatra") {
          contador.pediatria++;
        } else if (paciente.especialidad === "Cardiólogo") {
          contador.cardiologia++;
        }
        return contador;
      },
      {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
      }
    );
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes));

 