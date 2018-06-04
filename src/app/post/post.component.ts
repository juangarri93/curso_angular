import { Component, OnInit } from '@angular/core';
import { PostService,Post } from '../post.service';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  actualPosts=[]

  postElegido : Post;
  postAlta : Post;

  postForm : FormGroup;
  submitAttemp = false ; 

  constructor(private postService: PostService, public fb : FormBuilder) {

    this.postForm=fb.group({
      'id' : [null, Validators.required],
      'userId' : [null, Validators.required],
      'title' : [null, Validators.required],
      'body' : [null, Validators.required]
    });


  }

  ngOnInit() {
  this.postService.getPosts().subscribe(posts=>{
    this.actualPosts=posts;
  })
  
  }


  eventoClickBuscarPost($event, item:number){
  
    this.postService.getPost(item).subscribe(post=>{
      this.postElegido=post;
    })
       
  }

  eventoAltaPost($event){
  this.submitAttemp=true;
  if(this.postForm.valid){  
  let formData = this.postForm.value;   

  let post = {
  id: formData.id,
  userId: formData.userId,
  title: formData.title,
  body: formData.body
};

    this.postService.pushPost(post).subscribe(
      post=>{console.log(post);},
     error=> {console.log(error);}
  )

       
  }

  }

}
