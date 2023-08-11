import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clipboard-image';
  imgtxt: any;

  async onPaste(e: any ) {
    const appendImage = (blob: any) => {
      console.log('url', URL.createObjectURL(blob));
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      document.body.append(img);
    };

    const clipboardItems = typeof navigator?.clipboard?.read === 'function' ? await navigator.clipboard.read() : e.clipboardData.files;

    for (const clipboardItem of clipboardItems) {
      let blob;
      if (clipboardItem.type?.startsWith('image/')) {
        // For files from `e.clipboardData.files`.
        blob = clipboardItem
        // Do something with the blob.
        appendImage(blob);
      } else {
        // For files from `navigator.clipboard.read()`.
        const imageTypes = clipboardItem.types?.filter((type: any) => type.startsWith('image/'))
        for (const imageType of imageTypes) {
          blob = await clipboardItem.getType(imageType);
          // Do something with the blob.
          appendImage(blob);
        }
      }
    }
  }
}
