###### Türkçe bilgilendirmeyi aşağıda bulabilirsiniz.
# React Authentication Using Context Api

Context was came after React version 16.3. In react, data is passed top-down (Parent to child) via props. When you want to pass data from Layout to one component where inside a few layer. You have to need  pass props to every layer componentes. Context is primarily used when some data needs to be accessible by many components at different nesting levels. In this expamle, Demonstrates how to use context in authenticate.

You can learn more information about context in [here](https://reactjs.org/docs/context.html)

## Installation

If you want to clone your local environment. You can use below command

```bash
git clone https://github.com/mbozkaya/react-authentication-with-context-api.git
```

## Live Preview

You can click [here](https://sad-kalam-2fe6f8.netlify.app/) to look at the live preview.

## Usage

In this example, You able to use these features which login, signup and logout. Also I want to say, I've done login and signup requests use client side. If you want to look at this you can clik [here](https://github.com/mbozkaya/react-authentication-with-context-api/blob/main/src/components/MockApi.js)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

#
#

# Context Kullanarak React Authentication Yapılandırması

Context özelliği React'ın 16.3 versiyonundan sonra gelmiştir. Bu özellik sayesinde artık componentler arası state paylaşımı basit hale gelmiştir. React'ta bilindiği üzere componentler arası veri paylaşımı yukarıdan aşağıya yani parenttan child'a doğrudur ve aksi yönde veri paylaşmak için farklı yöntemler kullanılmaktadır. Ayrıca veriyi paylaşmak için en üst componentten hedef component'e kadar her component veriyi içeri aktarmak zorundadır. Context özelliğiyle birlikte bu zorunluluk ortadan kalkmış ve Oluşturulan bir context, useContext metoduyla her yerden erişilebilir hale gelmiştir. Bu sayede veri paylaşımı basit hale gelmiştir. Bu örnekte Context yaklaşımıyla authentication yapılandırmasını göreceksiniz.

Context hakkında daha fazla bilgi almak için [burayı](https://reactjs.org/docs/context.html) ziyaret edebilirsiniz.

## Canlı Örnek

[Buraya](https://sad-kalam-2fe6f8.netlify.app/)  tıklayarak canlı örneğe göz atabilirsiniz.

## Kullanım

Basit bir şekilde web sitesine giriş yapma, çıkış yapma ve kaydolma özelliklerini kullanabilirsiniz. Tamamıyla client tarafında çalışan bir örnek olduğu için ön tarafta sahte bir api requesti kullanmaktadır. Sahte apiyi incelemek için [buraya](https://github.com/mbozkaya/react-authentication-with-context-api/blob/main/src/components/MockApi.js) tıklayabilirsiniz.


## Katılımcı Olmak

Bir düzeltme yada geliştirme yapmak için rahatlıkla çekme isteği(PR yada MR) oluşturabilirsiniz.

## Lisans
[MIT](https://choosealicense.com/licenses/mit/)