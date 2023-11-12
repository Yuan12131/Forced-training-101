list1 = ["이유안", "이은정", "김우진", "정영식", "김현", "최성민", "김유안"]
list2 = ["피카츄", "라이츄", "꼬부기", "파이리"]

# 명단에 같은 이름(성씨제외)을 가진 학생이 두 명 있습니다. 이 중 마지막에 있는 학생의 위치를 찾아 출력하는 코드
# 끝으로 나오는 원소의 인덱스 찾기
last_index = next(index for index, name in enumerate(reversed(list1)) if "유안" in name)

last_index = len(list1) - last_index - 1

print(last_index)