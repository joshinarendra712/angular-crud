import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit{
  PostArray:Ipost[] =[]
  constructor(private postservice :PostService){}
  ngOnInit(): void {
    this.getAllPost()
  }
  getAllPost(){
    this.postservice.fetchAlldata().subscribe(
      (res)=>{
        this.PostArray = res
        console.log(res);
        
      }
    )
  }
  OnDeleteClick(id:number){
    this.postservice.deletePost(id).subscribe(res=>{
      // console.log(res);
    this.PostArray =  this.PostArray.filter(post => post.id !== id)
    })
  }
  onEditClick(){
    let flag = JSON.parse(localStorage.getItem('flag')!)
    flag = false
  }
}
