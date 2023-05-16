import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;
  SubmitFlag: boolean = true;
  constructor(
    private fb: FormBuilder,
    private postservie: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.CreateForm();
    this.onEdit();
  }
  CreateForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }
  OnSubmitHandler() {
    let userId = Math.floor(Math.random() * 10);
    let obj = {
      userId: userId,
      ...this.postForm.value,
    };
    this.postservie.CreatePost(obj).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/']);
  }
  onEdit() {
    this.route.params.subscribe((param: Params) => {
      let id = param['id'];
      localStorage.setItem('editId', ""+id);
      this.postservie.getSinglePost(id).subscribe((res) => {
        console.log(res);
        this.postForm.setValue({
          title: res.title,
          body: res.body,
          
        })
        this.SubmitFlag = false
      });
    });
  }
  OnUpdateClick() {
    let updateId = +localStorage.getItem('editId')!;
    let obj = {
      ...this.postForm.value,
    };
    this.postservie.getupdatePost(updateId, obj).subscribe(res=>{
      // console.log(res);
      this.SubmitFlag = true
    })
    this.router.navigate(['/'])
  }
}
