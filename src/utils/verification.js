export function checkPhone(value){
  const regPhone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  const flag = regPhone.test(value)
  return flag
}

export function checkPass(value) {
  const regPass = /^.{6,}/
  const flag = regPass.test(value)
  return flag
}