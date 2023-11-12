list1 = ["이유안", "이은정", "김우진", "정영식", "김현", "최성민", "김유안"]
list2 = ["피카츄", "라이츄", "꼬부기", "파이리"]

# 명단에서 성씨가 ‘김’씨인 학생의 이름을 찾아 출력하는 코드

Q7 = list(filter(lambda name: name.startswith("김"), list1))

print(Q7)