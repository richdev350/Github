import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/common/data.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css'],
})
export class CommitsComponent implements OnInit {
  mycommits: any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res) => {
      this.dataService
        .getCommits(res.userName, res.repoName)
        .subscribe((resp) => {
          this.mycommits = resp;
        });
    });
  }
}
