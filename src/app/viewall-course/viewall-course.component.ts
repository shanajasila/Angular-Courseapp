import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-course',
  templateUrl: './viewall-course.component.html',
  styleUrls: ['./viewall-course.component.css']
})
export class ViewallCourseComponent {
constructor(private api:ApiService){
  api.fetchCourses().subscribe(
    (response)=>{
      this.course=response
    }
  )
}

course:any=[]
}
