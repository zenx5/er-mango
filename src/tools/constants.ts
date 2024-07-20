import PlayModel from "./models/PlayModel"

export const items = [
    //genera 10 obras de teatro con name, time, date y seats aleatorios
    { id: 1, place:'Sala A', name: "La casa de Bernarda Alba", time: "20:00", date: "2022-12-12", seats: 100 },
    { id: 2, place:'Sala A', name: "La Celestina", time: "19:00", date: "2022-12-12", seats: 100 },
    { id: 3, place:'Sala A', name: "Don Juan Tenorio", time: "18:00", date: "2022-12-12", seats: 100 },
    { id: 4, place:'Sala A', name: "La vida es sueño", time: "17:00", date: "2022-12-12", seats: 100 },
    { id: 5, place:'Sala A', name: "Bodas de sangre", time: "16:00", date: "2022-12-12", seats: 100 },
    { id: 6, place:'Sala A', name: "El perro del hortelano", time: "15:00", date: "2022-12-12", seats: 100 },
    { id: 7, place:'Sala A', name: "El alcalde de Zalamea", time: "14:00", date: "2022-12-12", seats: 100 },
    { id: 8, place:'Sala A', name: "El burlador de Sevilla", time: "13:00", date: "2022-12-12", seats: 100 },
    { id: 9, place:'Sala A', name: "El castigo sin venganza", time: "12:00", date: "2022-12-12", seats: 100 },
    { id: 10, place:'Sala A', name: "El caballero de Olmedo", time: "11:00", date: "2022-12-12", seats: 100 },

  ]


export  const seed = async (item:any) => {

    const { name, time, date, seats, place } = item

    await PlayModel.post({ name, time, date, seats, place })
  }