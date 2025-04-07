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

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return obtenPacientesAsignadosAPediatria(pacientes).filter(
    (paciente: Pacientes) => paciente.edad < 10
  );
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente: Pacientes) =>
      paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100
  );
};
//aquii he eliminado el return y la variable q me pusisites por q si no al cuando cambiao las temperaturas o las frecuencias siguen siuin funcionarme bbien y siemprew devueleve false ,q es lo q esta preddeterminado, por favor explicame la forma correcta.
console.log(activarProtocoloUrgencia(pacientes));

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    }
    return paciente;
  });
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.every(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
};
//este creo que deberia salir true corrigeme si me equivoco,supongo q es q no lo ha hecho inmutable
console.log(HayPacientesDePediatria(pacientes));

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientes.forEach((paciente: Pacientes) => {
    if (paciente.especialidad === "Medico de familia") {
      resultado.medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      resultado.pediatria++;
    } else if (paciente.especialidad === "Cardiólogo") {
      resultado.cardiologia++;
    }
  });

  return resultado;
};
console.log(cuentaPacientesPorEspecialidad(pacientes));
