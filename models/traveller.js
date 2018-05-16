class Traveller{

  constructor(journeys){
    this.journeys = journeys;
  }

  getJourneyStartLocations(){
    return this.journeys.map((journey) =>{
      return journey.startLocation;
    } )
  }

  getJourneyEndLocations(){
    return this.journeys.map((journey)=> {return journey.endLocation})
  }

  getModesOfTransport(){
    return this.journeys.map((journey)=> {return journey.transport})
  }

  getJourneysByTransport(transport){
    return this.journeys.filter((journey)=>{return journey.transport === transport})
  }

  getJourneysByMinDistance(distance){
    return this.journeys.filter((journey)=>{return journey.distance >= distance})
  }

  calculateTotalDistanceTravelled(){
    return this.journeys.reduce((total,journey)=>{
      return total += journey.distance
    },0)
  }

  getUniqueModesOfTransport(){
    let listOfTransport = [];
    this.journeys.forEach((journey)=>{
      if(!listOfTransport.includes(journey.transport)){
        listOfTransport.push(journey.transport)
      }
    })
    return listOfTransport;
  }
}


module.exports = Traveller;
