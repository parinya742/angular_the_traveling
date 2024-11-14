import { Component } from '@angular/core';

@Component({
  selector: 'app-food-drink',
  templateUrl: './food-drink.component.html',
  styleUrl: './food-drink.component.css'
})
export class FoodDrinkComponent {
  fooddrink = [
    {
      food: 'PadThai', Country: 'Thailand', Description: 'เป็นอาหารที่อร่อยมาก',
      Contact: 'Facebook: Thailand Love PadThai'
    },

    {
      food: 'SomTum', Country: 'Thailand', Description: 'เป็นอาหารที่แซ่บมาก',
      Contact: 'Facebook: Thailand Love Somtum'
    },

  ];

  newFood = '';
  newCountry = '';
  newDescription = ''
  newContact = '';
  editingIndex: number | null = null;

  // ฟังก์ชันเพื่อเพิ่มรายการแนะนำอาหาร
  addRecommendation() {
    if (this.newFood && this.newCountry && this.newDescription && this.newContact) {
      this.fooddrink.push({
        food: this.newFood,
        Country: this.newCountry,
        Description: this.newDescription,
        Contact: this.newContact

      });
      // รีเซ็ตฟิลด์แบบฟอร์ม
      this.newFood = '';
      this.newCountry = '';
      this.newDescription = '';
      this.newContact = '';
    }
  }
  editRecommendation(index: number) {
    this.editingIndex = index;
    const item = this.fooddrink[index];
    this.newFood = item.food;
    this.newCountry = item.Country;
    this.newDescription = item.Description;
    this.newContact = item.Contact;
  }
  saveRecommendation() {
    if (this.editingIndex !== null && this.newFood && this.newCountry && this.newDescription && this.newContact) {
      this.fooddrink[this.editingIndex] = {
        food: this.newFood,
        Country: this.newCountry,
        Description: this.newDescription,
        Contact: this.newContact
      };
      this.cancelEdit();
    }
  }
  cancelEdit() {
    this.editingIndex = null;
    this.newFood = '';
    this.newCountry = '';
    this.newDescription = '';
    this.newContact = '';
  }

  deleteRecommendation(index: number) {
    this.fooddrink.splice(index, 1);
  }
}
