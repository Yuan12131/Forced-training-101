list1 = ["이유안", "이은정", "김우진", "정영식", "김현", "최성민", "김유안"]
list2 = ["피카츄", "라이츄", "꼬부기", "파이리"]

# 명단에 '홍'으로 시작하는 학생이 한 명이라도 있는지 확인하는 코드

Q14 = any(name.startswith("홍") for name in list1)
print(Q14)