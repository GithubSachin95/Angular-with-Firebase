import { Component ,OnInit, Input } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from '../../models/file-upload';
@Component({
  selector: 'upload-details',
  templateUrl: './uploaddetails.component.html',
 styleUrls:['./uploaddetails.component.css'] 
})

export class UploadDetailsComponent implements OnInit{
    @Input() fileUpload: FileUpload;

    constructor(private uploadService: FileUploadService) { }
  
    ngOnInit(): void {
        console.log(this.fileUpload);
    }
  
    deleteFileUpload(fileUpload): void {
      this.uploadService.deleteFile(fileUpload);
    }
  }