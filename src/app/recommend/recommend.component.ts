import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent {
  // รายการสถานที่แนะนำเบื้องต้น
  recommendations = [
    { name: 'France', description: 'France offers breathtaking landscapes, historic architecture, and world-renowned cuisine. From the Eiffel Tower in Paris to the lavender fields in Provence, it\'s a country filled with charm.' },
    { name: 'Italy', description: 'Known for its art, history, and incredible food, Italy is a must-visit destination. Explore ancient ruins in Rome, canals in Venice, and the beautiful countryside of Tuscany.' },
    { name: 'Japan', description: 'Japan is a land of contrasts, blending traditional temples and modern skyscrapers. Visit Tokyo for its futuristic vibe, Kyoto for its temples, and Hokkaido for stunning natural scenery.' },
    { name: 'New Zealand', description: 'New Zealand is famous for its natural beauty, including majestic mountains, pristine beaches, and friendly locals. It\'s a paradise for adventure lovers and nature enthusiasts.' },
  ];

  // ตัวแปรสำหรับฟิลด์ของแบบฟอร์ม
  newName = '';
  newDescription = '';
  editingIndex: number | null = null;

  // ฟังก์ชันเพื่อเพิ่มสถานที่แนะนำใหม่
  addRecommendation() {
    if (this.newName && this.newDescription) {
      this.recommendations.push({
        name: this.newName,
        description: this.newDescription
      });
      // รีเซ็ตฟิลด์แบบฟอร์ม
      this.newName = '';
      this.newDescription = '';
    }
  }

  editRecommendation(index: number){
    this.editingIndex = index;
    const item = this.recommendations[index];
    this.newName = item.name;
    this.newDescription = item.description;
  }
  saveRecommendation() {
    if (this.editingIndex !== null && this.newName && this.newDescription) {
      this.recommendations[this.editingIndex] = {
        name: this.newName,
        description: this.newDescription,

      };
      this.cancelEdit();
    }
  } 
  cancelEdit(){
    this.editingIndex = null;
    this.newName = '';
    this.newDescription = '';
  }
}
