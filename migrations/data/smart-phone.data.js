module.exports = {
  category:{
    name:'Điện thoại',
    slug:'dien_thoai',
    createdBy:'admin',
    updatedBy:'admin',
    createdAt:new Date(),
    updatedAt:new Date(),
    _destroy:false
  },
  filters:[ 
    {
      name:'Loại điện thoại',
      code:'f001',
      options:[
        {
          name:'Android',
          code:'f001_1',
        },
        {
          name:'Iphone (IOS)',
          code:'f001_2',
        },
        {
          name:'Điện thoại phổ thông',
          code:'f001_2',
        }
      ]
    },
    {
      name:'RAM',
      code:'f002',
      options:[
        {
          name:'4GB',
          code:'f002_1',
        },
        {
          name:'6GB',
          code:'f002_2',
        },
        {
          name:'8GB',
          code:'f002_3',
        },
        {
          name:'12GB',
          code:'f002_4',
        },
        {
          name:'16GB',
          code:'f002_5',
        }
      ]
    },
    {
      name:'Dung lượng lưu trữ',
      code:'f003',
      options:[
        {
          name:'64GB',
          code:'f003_1',
        },
        {
          name:'128GB',
          code:'f003_2',
        },
        {
          name:'256GB',
          code:'f003_3',
        },
        {
          name:'512GB',
          code:'f003_4',
        }
      ]
    },
    {
      name:'Tần số quét',
      code:'f004',
      options:[
        {
          name:'60 HZ',
          code:'f004_1',
        },
        {
          name:'90 HZ',
          code:'f004_2',
        },
        {
          name:'120 HZ',
          code:'f004_3',
        }
      ]
    },
    {
      name:'Tinh năng sạc',
      code:'f005',
      options:[
        {
          name:'Sạc nhanh (từ 20W)',
          code:'f005_1',
        },
        {
          name:'Sạc siêu nhanh (từ 60W)',
          code:'f005_2',
        },
        {
          name:'Sạc không dây',
          code:'f005_3',
        }
      ]
    },
    {
      name:'Tính năng đặc biệt',
      code:'f006',
      options:[
        {
          name:'Kháng nước, bụi',
          code:'f006_1',
        },
        {
          name:'Hỗ trợ 5G',
          code:'f006_2',
        },
        {
          name:'Công nghệ NPC',
          code:'f006_3',
        }
      ]
    },
    {
      name:'Độ phân giải',
      code:'f007',
      options:[
        {
          name:'HD+',
          code:'f007_2',
        },
        {
          name:'Full HD+',
          code:'f007_1',
        },
        {
          name:'QVGA',
          code:'f007_2',
        },
        {
          name:'2K',
          code:'f007_3',
        },
        {
          name:'Retiana',
          code:'f007_4',
        }
      ]
    },
  ],
  specs:[
    {
      name:'Màn hình',
      code:'s001',
      options:[
        {
          name:'Công nghệ màn hình',
          code:'s001_1',
        },
        {
          name:'Độ phân giải',
          code:'s001_2',
        },
        {
          name:'Màn hình rộng',
          code:'s001_3',
        },
        {
          name:'Độ sáng tối đa',
          code:'s001_4',
        },
        {
          name:'Mặt kính cảm ứng',
          code:'s001_5',
        }
      ]
    },
    {
      name:'Camera trước',
      code:'s002',
      options:[
        {
          name:'Đèn flash',
          code:'s002_1',
        },
        {
          name:'Quay phim',
          code:'s002_2',
        },
        {
          name:'Độ phân giải',
          code:'s002_3',
        },
        {
          name:'Tính năng',
          code:'s002_4',
        }
      ]
    },
    {
      name:'Camera sau',
      code:'s003',
      options:[
        {
          name:'Đèn flash',
          code:'s003_1',
        },
        {
          name:'Quay phim',
          code:'s003_2',
        },
        {
          name:'Độ phân giải',
          code:'s003_3',
        },
        {
          name:'Tính năng',
          code:'s003_4',
        }
      ]
    },
    {
      name:'Hệ điều hành & CPU',
      code:'s004',
      options:[
        {
          name:'Hệ điều hành',
          code:'s004_1',
        },
        {
          name:'Chip xử lý',
          code:'s004_2',
        },
        {
          name:'Tốc độ CPU',
          code:'s004_3',
        },
        {
          name:'Chip đồ họa',
          code:'s004_4',
        }
      ]
    },
    {
      name:'Bộ nhỏ & Lưu trữ',
      code:'s005',
      options:[ 
        {
          name:'RAM',
          code:'s005_1',
        },
        {
          name:'Dung lượng lưu trữ',
          code:'s005_2',
        },
      ]
    },
    {
      name:'Kết nối',
      code:'s006',
      options:[
        {
          name:'Mạng di động',
          code:'s005_1',
        },
        {
          name:'SIM',
          code:'s005_2',
        },
        {
          name:'WIFI',
          code:'s005_3',
        },
        {
          name:'GPS',
          code:'s005_4',
        },
        {
          name:'Bluetooth',
          code:'s005_5',
        },
        {
          name:'Cổng sạc',
          code:'s005_6',
        },
        {
          name:'Jack tai nghe',
          code:'s005_7',
        },
        {
          name:'Kết nối khác',
          code:'s005_8',
        }
      ]
    },
    {
      name:'Pin & sạc',
      code:'s007',
      options:[
        {
          name:'Dung lượng pin',
          code:'s007_1',
        },
        {
          name:'Loại pin',
          code:'s007_2',
        },
        {
          name:'Công nghệ pin',
          code:'s007_3',
        },
        {
          name:'Công suất sạc tối đa',
          code:'s007_4',
        }
      ]
    },
  ]
}