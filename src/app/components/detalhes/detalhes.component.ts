import { Component, Input, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';
import { Character, Film, List, Planet, Species, Starship, Vehicle } from 'src/types/types';
import { LoaderService } from '../loaderNovo/loader.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  urlDetalhes!: string[]
  constructor(private httpclientService: HttpclientService, private loaderService: LoaderService) { }
  detalhes!: List
  name!: string
  films: Film[] = []
  espaconaves: Starship[] = []
  veiculos: Vehicle[] = []
  planetas: Planet[] = []
  especies: Species[] = []
  pessoas: Character[] = []
  planetaNatal!: string


  ngOnInit(): void {
    this.getdata()
  }

  async getdata() {
    this.loaderShow()
    this.urlDetalhes = JSON.parse(sessionStorage.getItem('@url') ?? "")

    await this.httpclientService.get(`${this.urlDetalhes[0]}/${this.urlDetalhes[1]}`).subscribe((res) => {
      this.setLista(res)
      res.homeworld && this.getPlanetaNatal(res.homeworld)

      if (res.films) {
        res.films.map((item) => {
          this.getFilmes(item)

        })
      } if (res.starships) {
        res.starships.map((item) => {
          this.getStarchips(item)
        })
      } if (res.vehicles) {
        res.vehicles.map((item) => {
          this.getVeiculos(item)

        })
      }
      if (res.planets) {
        res.planets.map((item) => {
          this.getPlanetas(item)

        })
      } if (res.species) {
        res.species.map((item) => {
          this.getEspecies(item)

        })
      } if (res.characters) {
        res.characters.map((item) => {
          this.getPessoas(item)

        })
      }
      if (res.residents) {
        res.residents.map((item) => {
          this.getPessoas(item)

        })
      }
      if (res.people) {
        res.people.map((item) => {
          this.getPessoas(item)

        })
      }
      this.loaderHide()

    })

  }

  loaderShow() {
    this.loaderService.show()
  }
  loaderHide() {
    this.loaderService.hide()
  }
  setLista(res: List) {
    this.detalhes = res
  }
  getName() {
    const name = this.detalhes?.name ? this.detalhes.name : this.detalhes?.title
    return name
  }
  getPlanetaNatal(url: string) {
    const filmUrl = url.split('/')
    this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      this.planetaNatal = res.name
    })
  }
  getFilmes(film: string) {

    const filmUrl = film.split('/')
    this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      this.setFilms(res)


    })


  }
  setFilms(res: Film) {
    res && this.films.push(res)
  }
  getStarchips(url: string) {
    const filmUrl = url.split('/')
    this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      this.setStarchips(res)
    })
  }
  setStarchips(res: Starship) {
    res && this.espaconaves.push(res)
  }

  getVeiculos(url: string) {
    const filmUrl = url.split('/')
    this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      this.setVeiculos(res)
    })
  }
  setVeiculos(res: Vehicle) {
    res && this.veiculos.push(res)
  }

  getPlanetas(url: string) {
    const filmUrl = url.split('/')
    this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      this.setPlanetas(res)
    })
  }
  setPlanetas(res: Planet) {
    res && this.planetas.push(res)
  }
  getEspecies(url: string) {
    const filmUrl = url.split('/')
    this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      this.setEspecies(res)
    })
  }
  setEspecies(res: Species) {
    res && this.especies.push(res)
  }
  getPessoas(url: string) {
    const filmUrl = url.split('/')
    this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      this.setPessoas(res)
    })
  }
  setPessoas(res: Character) {
    res && this.pessoas.push(res)
  }
}

