import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {



  @ViewChild("mapa", { static: false }) mapaElement: ElementRef;

  directionsService: any;
  directionsDisplay: any;

  map: any;

  ngOnInit() {
    console.log(this.mapaElement)


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        this.loadMap(position))
      // token Mario <script
      // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9CobDD06h6vgzmUpmoKIpCgSXc43B7B0&libraries=places,directions"></script>
    }


    else { "No funciona navigator.geolocation" }
  }

  ngAfterViewInit() {


  }

  loadMap(position) {

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer()
    // objeto para pintar 


    const mapProps = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID // ROADMAP, SATELLITE, TERRAIN
    };

    this.map = new google.maps.Map(this.mapaElement.nativeElement, mapProps)
    this.directionsDisplay.setMap(this.map);

    // const map = new google.maps.Map(this.mapaElement.nativeElement, {
    //   center: new google.maps.LatLng(51.505, -0.09),
    //   mapTypeId: google.maps.MapTypeId.ROADMAP,
    //   zoom: 11
    // });

    // this.map = new google.maps.Map(document.getElementById("mapId"), mapProps)

    const marker = new google.maps.Marker({
      position: mapProps.center,
      title: "Estoy aquí",
      map: this.map

    });

    google.maps.event.addListener(this.map, "click", ($event) => {
      let newMarker = new google.maps.Marker({
        position: $event.latLng,
        animation: google.maps.Animation.DROP,//BOUNCE
        title: $event.latLng.toString(),
        // ,  icon: url


      })
      newMarker.setMap(this.map)
      // newMarker.setTitle("pepe")
      newMarker.addListener("click", () => { alert("VIVA EL VINO") })

    })

    let options = {
      types: ['address']
    };

    const autocomplete = new google.maps.places.Autocomplete(document.getElementById("inputPlaces"), options);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log(place.geometry.location.lat());

      this.map.setCenter(place.geometry.location)
      // CENTRA EN EL PLACE 

      const newMarker = new google.maps.Marker({
        position: place.geometry.location,
        title: "Busqueda Marcada",
      })
      newMarker.setMap(this.map)
      console.log(this.map)
    }
      // .bind(this)
    )

  }
  rutaClick() {

    // origin, destiny, travelMode

    let options = {
      origin: "madrid, es",
      destination: "toledo, es",
      travelMode: google.maps.TravelMode.WALKING //DRIVING
    }

    this.directionsService.route(options, (result, status) => {

      console.log("enturtacion " + result)
      this.directionsDisplay.setDirections(result)
    }
    )
  }

}

