import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css'
})
export class EventDetail implements OnInit {
  eventId: string | null = null;
  event: any;

  // Örnek yorumlar verisi
  comments = [
    { user: 'Mert Osman', text: 'Bu etkinlik için çok heyecanlıyım!', time: '2 saat önce', initials: 'MO' },
    { user: 'Zeynep Yılmaz', text: 'Kontenjan dolmadan yerimi ayırttım, görüşmek üzere.', time: '5 saat önce', initials: 'ZY' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // URL'deki ID'yi alıyoruz (/event/1 ise id = 1 olur)
    this.eventId = this.route.snapshot.paramMap.get('id');

    // Şimdilik ID'ye bakmaksızın örnek bir veri gösteriyoruz
    // İleride burası servisten (API) gelecek
    this.event = {
      title: 'Yapay Zeka ve Gelecek Konferansı',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      clubName: 'Bilgisayar Topluluğu',
      clubInitials: 'BT',
      date: '15 Mart 2026 - 14:00',
      location: 'Konferans Salonu A',
      capacity: '150 / 200',
      description: 'Yapay zeka dünyasındaki son gelişmeleri, ChatGPT ve üretken yapay zeka modellerinin geleceğini sektörün öncü isimleriyle tartışacağımız bu konferansı kaçırmayın. Etkinlik sonunda sertifika verilecektir.',
      likes: 124,
      commentsCount: 32,
      price: 'Ücretsiz'
    };
  }
}
