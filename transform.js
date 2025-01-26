const path = require("path");

const CWebp = require("cwebp").CWebp;

const originImg = path.resolve("./assets/photo.webp");
const outImage = path.resolve(__dirname, "./assets/outImage.webp");

const cwebpTransform = (value) => {
  const encoder = new CWebp(
    originImg,
    "D:/my_software/libwebp-0.4.1-windows-x86/bin/cwebp.exe"
  );
  encoder.quality(value);
  encoder.write(`./assets/cwebp/cwebp-${value}.webp`).then(function (err) {
    if (err) console.log(err);
  });
};

const gmTransform = () => {
  const gm = require("gm").subClass({ imageMagick: true });
  gm(originImg)
    .interlace("Line") // 设置为渐进式
    .write(path.resolve(__dirname, "./assets/output/gm-image.webp"), (err) => {
      if (err) console.error(err);
    });
};

const sharpTransform = (value) => {
  const sharp = require("sharp");
  const fs = require("fs");

  // 读取原始图片为Buffer
  const inputBuffer = fs.readFileSync(originImg);

  const options = {
    quality: value,
    ...(value === 1 && {
      lossless: false,
      nearLossless: true,
      reductionEffort: 6,
      smartSubsample: true,
    }),
  };

  sharp(inputBuffer)
    .webp(options)
    .toBuffer()
    .then((outputBuffer) => {
      // 对于quality=1的图片，检查并调整大小
      if (value === 1 && outputBuffer.length > 1024) {
        return sharp(inputBuffer)
          .resize(60) // 缩小尺寸
          .webp({
            quality: 1,
            lossless: false,
            nearLossless: true,
            reductionEffort: 6,
          })
          .toBuffer();
      }
      return outputBuffer;
    })
    .then((finalBuffer) => {
      // 将Buffer写入文件
      fs.writeFileSync(
        path.resolve(__dirname, `./assets/sharp/sharp-${value}.webp`),
        finalBuffer
      );
    })
    .catch((err) => {
      console.error(err);
    });
};

for (let data of [100, 94, 90, 50, 5, 1]) {
  sharpTransform(data);
}
