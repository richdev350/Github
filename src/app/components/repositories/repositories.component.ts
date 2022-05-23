import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/common/data.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  myrepo : any
  userName : any
  constructor(private activeRoute : ActivatedRoute,private dataService : DataService,private route : Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(res=>{
      this.userName = res.userName
      this.dataService.getAllPublicRepository(this.userName ).subscribe(resp=>{
        this.myrepo = resp
      })
    })
    
  }

  selectRepo(reponame:any){
    this.route.navigateByUrl(`/commits/${this.userName}/${reponame}`)
  }

}
