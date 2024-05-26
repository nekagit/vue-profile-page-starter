import SOPPic from '@/assets/SOP/img/imgs/kros 2022/1.jpeg'
import SOPPic1 from '@/assets/SOP/img/imgs/kros 2022/2.jpeg'
import SOPPic2 from '@/assets/SOP/img/imgs/kros 2022/3.jpeg'
import SOPPic3 from '@/assets/SOP/img/imgs/kros 2022/4.jpeg'
import SOPPic4 from '@/assets/SOP/img/imgs/kros 2022/5.jpeg'
import SchoolPic from '@/assets/SOP/img/skola/1.jpeg'
import SchoolPic1 from '@/assets/SOP/img/skola/2.jpeg'
import SchoolPic2 from '@/assets/SOP/img/skola/3.jpeg'
import SchoolPic3 from '@/assets/SOP/img/skola/4.jpeg'
import SchoolPic4 from '@/assets/SOP/img/skola/5.jpeg'
import BoxPic from '@/assets/SOP/img/imgs/boks/1.jpeg'
import BoxPic1 from '@/assets/SOP/img/imgs/boks/2.jpeg'
import BoxPic2 from '@/assets/SOP/img/imgs/boks/3.jpeg'
import BoxPic3 from '@/assets/SOP/img/imgs/boks/4.jpeg'
import BoxPic4 from '@/assets/SOP/img/imgs/boks/5.jpeg'

import Sponsors from '@/assets/SOP/img/logoo.png'
import Kros from '@/assets/SOP/sportPage/kros.png'
import fudbal from '@/assets/SOP/sportPage/fudbalfirst.jpeg'
import atletikfirst from '@/assets/SOP/sportPage/atletikfirst.jfif'
import plivanjefirst from '@/assets/SOP/sportPage/plivanjefirst.jfif'

export default function ImageHelper() {
  const sopGallery = [SOPPic, SOPPic1, SOPPic2, SOPPic3, SOPPic4]
  const sportGallery = [BoxPic, BoxPic1, BoxPic2, BoxPic3, BoxPic4]
  const schoolGallery = [SchoolPic, SchoolPic1, SchoolPic2, SchoolPic3, SchoolPic4]
  const sportPage = [Sponsors, Kros, fudbal, BoxPic, atletikfirst, plivanjefirst]
  const sportPageSectionImages = [
    [Sponsors, Sponsors, Sponsors, Sponsors, Sponsors, Sponsors, Sponsors, Sponsors],
    [Kros, Kros, Kros, Kros, Kros, Kros, Kros, Kros, Kros, Kros, Kros, Kros],
    [fudbal, fudbal, fudbal, fudbal, fudbal, fudbal, fudbal, fudbal, fudbal, fudbal],
    [BoxPic, BoxPic, BoxPic, BoxPic, BoxPic, BoxPic, BoxPic, BoxPic, BoxPic, BoxPic],
    [
      atletikfirst,
      atletikfirst,
      atletikfirst,
      atletikfirst,
      atletikfirst,
      atletikfirst,
      atletikfirst,
      atletikfirst
    ],
    [
      plivanjefirst,
      plivanjefirst,
      plivanjefirst,
      plivanjefirst,
      plivanjefirst,
      plivanjefirst,
      plivanjefirst,
      plivanjefirst
    ]
  ]
  return { sopGallery, sportGallery, schoolGallery, sportPage, sportPageSectionImages }
}
