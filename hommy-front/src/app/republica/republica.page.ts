import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-republica',
  templateUrl: './republica.page.html',
  styleUrls: ['./republica.page.scss'],
})
export class RepublicaPage implements OnInit {

  commentForm: FormGroup;
  editCommentForm: FormGroup;
  editMode = false;

  comments = [];
  republic_id;
  username;

  constructor(
   public formbuilder: FormBuilder,
   public commentService: CommentService) { 
   this.commentForm = this.formbuilder.group({
      text: [null, [Validators.required, Validators.maxLength(140)]],
    });
    this.editCommentForm = this.formbuilder.group({
      text: [null, [Validators.required, Validators.maxLength(140)]],
    });
  };


  ngOnInit() {
    console.log(this.republic_id);
    this.comments = [{
      id: 1,
      username: 'Kujo Jotaro',
      text: 'Oraoraoraoraoraoraororaoraoraoraoroaroarraoao!'
    },
    {
      id: 2,
      username: 'Josuke Higashikata',
      text: 'Dorarararararararararararara!'
    },
    {
      id: 3,
      username: 'Joseph Joestar',
      text: 'Oh my god!!!'
    },
    {
      id: 4,
      username: 'Giorno Giovanna',
      text: 'Mudamudamudamudamudamudamuda!'
    }];
  };

  sendComment(form){
    console.log(form);
    console.log(form.value);
    let body = form.value;
    let republic_id = JSON.parse(localStorage.getItem('republica')).id;
    body.republic_id = this.republic_id;
    body.username= this.username;
    let name= localStorage.getItem('username'); 
    console.log(name, republic_id);


    this.editMode = false;

    this.commentService.postComment(form.value).subscribe(
      (res) => {
        alert(res);
        console.log(res);
      }, (err) => {console.log(err)}
    );
  }

  sendEditComment(form){
    console.log(form);
    console.log(form.value);
    this.editMode = false;
    this.commentService.postComment(form).subscribe(
      (res) => {
        console.log(res); 
      },
      (err) => { 
        console.log (err);
      }
    );  
  }

  toggleEdit(id){
    this.editMode = true;
    console.log(id);
  };

  deleteComment(id){
    console.log('Mais que cancelado: ' + id);
  }

};
